import { useState, useEffect } from "react";
import { Plus, Eye, Trash2, X, Download, Wrench, FileDown } from "lucide-react";

const FreeTools = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    whatIncluded: "",
    fileUrl: null,
    fileName: "",
    emailFieldLabel: "Business Email",
    turnoverFieldLabel: "Annual Turnover (₹ Crores)",
    downloadBtnText: "Download Now",
    icon: "📊",
    downloadCount: 0,
  });

  const [freeTools, setFreeTools] = useState([]);
  const [previewTool, setPreviewTool] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("freeTools");
    if (saved) {
      try {
        setFreeTools(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading free tools:", error);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("freeTools", JSON.stringify(freeTools));
  }, [freeTools]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          fileUrl: reader.result,
          fileName: file.name
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.whatIncluded) {
      alert("Please fill all required fields!");
      return;
    }

    const newTool = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      whatIncluded: formData.whatIncluded.split('\n').filter(item => item.trim()),
      fileUrl: formData.fileUrl,
      fileName: formData.fileName,
      emailFieldLabel: formData.emailFieldLabel,
      turnoverFieldLabel: formData.turnoverFieldLabel,
      downloadBtnText: formData.downloadBtnText,
      icon: formData.icon,
      downloadCount: 0,
      createdDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    setFreeTools([newTool, ...freeTools]);
    
    setFormData({
      title: "",
      description: "",
      whatIncluded: "",
      fileUrl: null,
      fileName: "",
      emailFieldLabel: "Business Email",
      turnoverFieldLabel: "Annual Turnover (₹ Crores)",
      downloadBtnText: "Download Now",
      icon: "📊",
      downloadCount: 0,
    });
    setShowModal(false);

    alert("✅ Free Tool added successfully!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this free tool?")) {
      setFreeTools(freeTools.filter(tool => tool.id !== id));
      alert("Free Tool deleted successfully!");
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName || 'free-tool.zip';
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
          <h1 className="text-3xl font-bold text-gray-900">Free Tools</h1>
          <p className="text-gray-600 mt-1">Manage downloadable resources and tools</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Free Tool
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-semibold">Total Tools</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{freeTools.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-semibold">Total Downloads</p>
          <p className="text-3xl font-bold text-green-600 mt-1">
            {freeTools.reduce((sum, tool) => sum + tool.downloadCount, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm font-semibold">Active</p>
          <p className="text-3xl font-bold text-purple-600 mt-1">{freeTools.filter(t => t.fileUrl).length}</p>
        </div>
      </div>

      {/* Free Tools List */}
      {freeTools.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Wrench className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg mb-2">No free tools yet</p>
          <p className="text-gray-500 text-sm mb-6">Add your first free tool or resource</p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add First Tool
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {freeTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tool.title}</h3>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewTool(tool)}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                      title="Preview"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(tool.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="space-y-2">
                      {tool.whatIncluded.map((item, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-green-500 font-bold mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Tool Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold text-gray-700">File:</span> {tool.fileName || 'No file'}</p>
                      <p><span className="font-semibold text-gray-700">Downloads:</span> {tool.downloadCount}</p>
                      <p><span className="font-semibold text-gray-700">Added:</span> {tool.createdDate}</p>
                      <p><span className="font-semibold text-gray-700">Email Field:</span> {tool.emailFieldLabel}</p>
                      <p><span className="font-semibold text-gray-700">Turnover Field:</span> {tool.turnoverFieldLabel}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                <span className="text-sm text-gray-600">ID: {tool.id}</span>
                {tool.fileUrl && (
                  <button
                    onClick={() => handleDownload(tool.fileUrl, tool.fileName)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download File
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
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Add New Free Tool</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tool Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Download UAE Tax Saving Blueprint"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="e.g., Get our comprehensive guide with tax calculators, checklists, and templates..."
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* What's Included */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's Included <span className="text-red-500">*</span>
                  <span className="text-xs text-gray-500 font-normal ml-2">(One per line)</span>
                </label>
                <textarea
                  name="whatIncluded"
                  value={formData.whatIncluded}
                  onChange={handleInputChange}
                  placeholder="Tax Savings Calculator (Excel template)
UAE Structure Comparison Guide
Documentation Checklist
Cost Estimation Worksheet"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                  required
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Download File (ZIP, PDF, Excel)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-50">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="toolFileInput"
                  />
                  <label htmlFor="toolFileInput" className="cursor-pointer block">
                    {formData.fileName ? (
                      <div className="space-y-2">
                        <FileDown className="w-12 h-12 mx-auto text-blue-600" />
                        <p className="text-sm text-blue-600 font-semibold">{formData.fileName}</p>
                        <p className="text-xs text-blue-500">Click to change file</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <FileDown className="w-12 h-12 mx-auto text-gray-400" />
                        <p className="text-gray-600 font-semibold">Click to upload file</p>
                        <p className="text-xs text-gray-500">ZIP, PDF, Excel files supported</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Form Labels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Field Label
                  </label>
                  <input
                    type="text"
                    name="emailFieldLabel"
                    value={formData.emailFieldLabel}
                    onChange={handleInputChange}
                    placeholder="e.g., Business Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Turnover Field Label
                  </label>
                  <input
                    type="text"
                    name="turnoverFieldLabel"
                    value={formData.turnoverFieldLabel}
                    onChange={handleInputChange}
                    placeholder="e.g., Annual Turnover (₹ Crores)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Button Text & Icon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Download Button Text
                  </label>
                  <input
                    type="text"
                    name="downloadBtnText"
                    value={formData.downloadBtnText}
                    onChange={handleInputChange}
                    placeholder="e.g., Download Now"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Icon (Emoji)
                  </label>
                  <input
                    type="text"
                    name="icon"
                    value={formData.icon}
                    onChange={handleInputChange}
                    placeholder="📊"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-2xl"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4 border-t">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add Free Tool
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-bold text-gray-900">{previewTool.title}</h3>
              <button
                onClick={() => setPreviewTool(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-gray-700 text-center text-lg">{previewTool.description}</p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  {previewTool.whatIncluded.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Form Preview:</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {previewTool.emailFieldLabel}
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {previewTool.turnoverFieldLabel}
                    </label>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      disabled
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    disabled
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    {previewTool.downloadBtnText}
                  </button>
                </form>
              </div>

              <p className="text-center text-xs text-gray-500">
                Total Downloads: {previewTool.downloadCount}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeTools;
