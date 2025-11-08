  import { useState, useEffect } from "react";
  import { Plus, Eye, Trash2, X, Upload, BookOpen, FileText, Download } from "lucide-react";

  const API_BASE_URL = "http://localhost:5000/api";

  const CaseStudies = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
      title: "",
      subtitle: "",
      challenge: "",
      solution: "",
      result: "",
      image: null,
      imagePreview: null,
      pdfFile: null,
      pdfName: "",
    });

    // Case Studies State
    const [caseStudies, setCaseStudies] = useState([]);
    const [previewCase, setPreviewCase] = useState(null);

    // Fetch case studies on mount
    useEffect(() => {
      fetchCaseStudies();
    }, []);

    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        console.log("📖 Fetching case studies from backend...");
        const response = await fetch(`${API_BASE_URL}/casestudies`);
        if (!response.ok) throw new Error("Failed to fetch case studies");
        const data = await response.json();
        console.log("✅ Case studies fetched:", data);
        setCaseStudies(data);
      } catch (error) {
        console.error("❌ Error fetching case studies:", error);
        alert("⚠️ Failed to load case studies. Check console.");
      } finally {
        setLoading(false);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            image: file,
            imagePreview: reader.result
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file");
      }
    };

    const handlePdfChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            pdfFile: reader.result,
            pdfName: file.name
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid PDF file");
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.title || !formData.subtitle || !formData.challenge || !formData.solution || !formData.result) {
        alert("Please fill all required fields!");
        return;
      }

      try {
        setSubmitting(true);
        console.log("➕ Creating case study...");

        const caseStudyData = {
          title: formData.title,
          subtitle: formData.subtitle,
          challenge: formData.challenge,
          solution: formData.solution,
          result: formData.result,
          image: formData.imagePreview || "https://via.placeholder.com/400x200?text=No+Image",
          pdfFile: formData.pdfFile,
          pdfName: formData.pdfName,
        };

        const response = await fetch(`${API_BASE_URL}/casestudies`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(caseStudyData)
        });

        if (!response.ok) throw new Error("Failed to create case study");

        const result = await response.json();
        console.log("✅ Case study created:", result);

        alert("✅ Case Study added successfully!");

        // Reset form
        setFormData({
          title: "",
          subtitle: "",
          challenge: "",
          solution: "",
          result: "",
          image: null,
          imagePreview: null,
          pdfFile: null,
          pdfName: "",
        });
        setShowModal(false);

        // Refresh list
        fetchCaseStudies();
      } catch (error) {
        console.error("❌ Error creating case study:", error);
        alert("❌ Failed to add case study");
      } finally {
        setSubmitting(false);
      }
    };

    const handleDelete = async (id) => {
      if (!window.confirm("Are you sure you want to delete this case study?")) return;

      try {
        setLoading(true);
        console.log(`🗑️ Deleting case study: ${id}`);

        const response = await fetch(`${API_BASE_URL}/casestudies/${id}`, {
          method: "DELETE"
        });

        if (!response.ok) throw new Error("Failed to delete case study");

        console.log("✅ Case study deleted");
        alert("Case Study deleted successfully!");
        fetchCaseStudies();
      } catch (error) {
        console.error("❌ Error deleting case study:", error);
        alert("❌ Failed to delete case study");
      } finally {
        setLoading(false);
      }
    };

    const handleDownloadPdf = (pdfFile, pdfName) => {
      if (pdfFile) {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = pdfName || 'case-study.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
            <p className="text-gray-600 mt-1">Success Stories & Client Testimonials</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            disabled={submitting}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition-all disabled:opacity-50"
          >
            <Plus className="w-5 h-5" />
            Add Case Study
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-semibold">Total Cases</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{caseStudies.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">With PDF</p>
            <p className="text-3xl font-bold text-green-600 mt-1">{caseStudies.filter(c => c.pdfFile).length}</p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
              <p className="text-gray-600 text-lg">Loading case studies...</p>
            </div>
          </div>
        )}

        {/* Case Studies Cards */}
        {!loading && caseStudies.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg mb-2">No case studies yet</p>
            <p className="text-gray-500 text-sm mb-6">Start by adding your first success story</p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add First Case Study
            </button>
          </div>
        ) : !loading && (
          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <div key={cs._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                  <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{cs.title}</h3>
                        <p className="text-gray-600 text-sm">{cs.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewCase(cs)}
                        className="p-2 text-blue-600 hover:bg-blue-200 rounded-lg transition-colors"
                        title="View Full Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(cs._id)}
                        disabled={loading}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image & Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    {cs.image && (
                      <img 
                        src={cs.image} 
                        alt={cs.title}
                        className="w-full h-48 object-cover rounded-lg border-2 border-gray-200"
                      />
                    )}
                  </div>

                  {/* Content Grid */}
                  <div className="md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{cs.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Solution</h4>
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{cs.solution}</p>
                      </div>

                      {/* Result */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Result</h4>
                        <p className="text-orange-600 font-semibold text-sm leading-relaxed line-clamp-3">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>📅 {new Date(cs.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  {cs.pdfFile && (
                    <button
                      onClick={() => handleDownloadPdf(cs.pdfFile, cs.pdfName)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-semibold"
                    >
                      <Download className="w-4 h-4" />
                      Download Full Case Study
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Add New Case Study</h2>
                <button
                  onClick={() => setShowModal(false)}
                  disabled={submitting}
                  className="text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Title & Subtitle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., ₹2.4 Cr Annual Savings: Manufacturing MSME Success Story"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subtitle <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleInputChange}
                      placeholder="e.g., Industrial Equipment Manufacturer"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-50 hover:bg-blue-50">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                      id="caseImageInput"
                    />
                    <label htmlFor="caseImageInput" className="cursor-pointer block">
                      {formData.imagePreview ? (
                        <div className="space-y-2">
                          <img 
                            src={formData.imagePreview} 
                            alt="Preview" 
                            className="h-40 w-full mx-auto object-cover rounded-lg border-2 border-blue-500" 
                          />
                          <p className="text-sm text-blue-600 font-semibold">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="w-12 h-12 mx-auto text-gray-400" />
                          <p className="text-gray-600 font-semibold">Click to upload image</p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Challenge, Solution, Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Challenge <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      placeholder="Describe the client's main challenge"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Solution <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="solution"
                      value={formData.solution}
                      onChange={handleInputChange}
                      placeholder="Describe the solution provided"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Result <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="result"
                      value={formData.result}
                      onChange={handleInputChange}
                      placeholder="Describe the achieved results"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* PDF Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Case Study PDF (Download)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-50 hover:bg-blue-50">
                    <input
                      type="file"
                      onChange={handlePdfChange}
                      accept=".pdf"
                      className="hidden"
                      id="casePdfInput"
                    />
                    <label htmlFor="casePdfInput" className="cursor-pointer block">
                      {formData.pdfName ? (
                        <div className="space-y-2">
                          <FileText className="w-12 h-12 mx-auto text-blue-600" />
                          <p className="text-sm text-blue-600 font-semibold">{formData.pdfName}</p>
                          <p className="text-xs text-blue-500">Click to change PDF</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <FileText className="w-12 h-12 mx-auto text-gray-400" />
                          <p className="text-gray-600 font-semibold">Click to upload PDF</p>
                          <p className="text-xs text-gray-500">Full case study document (PDF only)</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-4 border-t">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Adding..." : "Add Case Study"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={submitting}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Preview Modal */}
        {previewCase && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
                <h3 className="text-xl font-bold text-gray-900">{previewCase.title}</h3>
                <button
                  onClick={() => setPreviewCase(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-gray-600 font-semibold">{previewCase.subtitle}</p>

                {previewCase.image && (
                  <img 
                    src={previewCase.image} 
                    alt={previewCase.title}
                    className="w-full h-96 object-cover rounded-lg border-2 border-gray-200"
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">{previewCase.challenge}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-700 text-sm whitespace-pre-wrap">{previewCase.solution}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Result</h4>
                    <p className="text-orange-600 font-semibold text-sm whitespace-pre-wrap">{previewCase.result}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center pt-4 border-t">
                  <span className="text-gray-600">📅 {new Date(previewCase.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  {previewCase.pdfFile && (
                    <button
                      onClick={() => handleDownloadPdf(previewCase.pdfFile, previewCase.pdfName)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-semibold ml-auto"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default CaseStudies;
