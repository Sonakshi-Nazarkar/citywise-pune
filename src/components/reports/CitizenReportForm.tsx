import React, { useState } from 'react';
import { CitizenReport, ReportCategory, ReportSeverity } from '../../types';
import { AlertTriangle, Camera, CheckCircle2, Send, X, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

interface CitizenReportFormProps {
  onSubmitReport: (report: CitizenReport) => void;
}

export const CitizenReportForm: React.FC<CitizenReportFormProps> = ({ onSubmitReport }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ReportCategory>('pothole');
  const [locality, setLocality] = useState('Kothrud / Karve Road');
  const [severity, setSeverity] = useState<ReportSeverity>('medium');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const puneLocalities = [
    'Kothrud / Karve Road',
    'Deccan Gymkhana / FC Road',
    'Koregaon Park',
    'Viman Nagar / Airport Rd',
    'Hinjawadi IT Park',
    'Swargate / Camp',
    'Shivaji Nagar / JM Road',
    'Baner & Balewadi High St',
    'Sinhagad Road / Anand Nagar',
    'Khadakwasla Dam vicinity'
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newId = `REP-PN-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReport: CitizenReport = {
      id: newId,
      title: title.trim(),
      category,
      locality,
      description: description.trim(),
      severity,
      timestamp: 'Just now',
      status: 'under_review',
      upvotes: 1,
      userUpvoted: true,
      imageUrl: imagePreview || undefined,
      isUserGenerated: true
    };

    onSubmitReport(newReport);
    setSubmittedId(newId);

    // Reset fields
    setTitle('');
    setDescription('');
    setImagePreview(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Report Civic or Safety Hazard
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Community Action
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Flag potholes, dark streets, garbage heaps, or transit disruptions. Stored in your local session and broadcasted to the feed.
          </p>
        </div>
        <DemoBadge label="Local Storage Persistence" tooltip="Reports are saved to your browser local storage and appear instantly in the community feed." />
      </div>

      {submittedId && (
        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start justify-between gap-3 animate-in fade-in-50">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 space-y-0.5">
              <span className="font-bold text-sm block">Report Logged Successfully!</span>
              <p>
                Your issue has been recorded with tracking ID <strong className="font-mono">{submittedId}</strong> and published to the live Community Feed below with status <strong>Under Review</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={() => setSubmittedId(null)}
            className="text-emerald-700 hover:text-emerald-900 text-xs font-bold p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Title */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Issue Headline <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Broken street light causing dark stretch near Goodluck Chowk"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Category & Locality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as ReportCategory)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-indigo-500 cursor-pointer"
            >
              <option value="pothole">?? Road Pothole / Crater</option>
              <option value="lighting">?? Non-Functional Street Light</option>
              <option value="cleanliness">??? Garbage / Waste Overflow</option>
              <option value="safety">??? Safety / Harassment Concern</option>
              <option value="transit">?? Bus / Metro Disruption</option>
              <option value="other">?? Other Civic Hazard</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Pune Locality
            </label>
            <select
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-indigo-500 cursor-pointer"
            >
              {puneLocalities.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Severity */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Severity Level
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSeverity('low')}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                severity === 'low'
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              ?? Low (Minor defect)
            </button>
            <button
              type="button"
              onClick={() => setSeverity('medium')}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                severity === 'medium'
                  ? 'bg-amber-50 border-amber-500 text-amber-800 ring-2 ring-amber-500/20'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              ?? Medium (Disruptive)
            </button>
            <button
              type="button"
              onClick={() => setSeverity('urgent')}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                severity === 'urgent'
                  ? 'bg-rose-50 border-rose-500 text-rose-800 ring-2 ring-rose-500/20'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              ?? Urgent (Accident Risk)
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Detailed Description <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the exact location, landmarks nearby, and potential danger for pedestrians or commuters..."
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all"
          />
        </div>

        {/* Mock Photo Upload with Real Local File Preview */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Attach Photo (Optional Preview)
          </label>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-300 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer transition-colors">
              <Camera className="w-4 h-4 text-slate-500" />
              <span>Choose photo from device</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            {imagePreview && (
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                <img src={imagePreview} alt="Upload preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute top-0 right-0 bg-slate-900/80 text-white p-0.5 rounded-bl-sm"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            No account required. Instant local submission.
          </span>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Publish Report</span>
          </button>
        </div>
      </form>
    </div>
  );
};
