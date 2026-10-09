import React, { useState } from 'react';
import { CitizenReport, ReportStatus } from '../../types';
import { ThumbsUp, MapPin, Clock, AlertTriangle, CheckCircle, HelpCircle, Shield, Filter, Eye } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

interface CommunityFeedProps {
  reports: CitizenReport[];
  onUpvote: (reportId: string) => void;
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({ reports, onUpvote }) => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredReports = reports.filter((r) => {
    if (statusFilter === 'all') return true;
    return r.status === statusFilter;
  });

  const getStatusBadge = (status: ReportStatus) => {
    switch (status) {
      case 'resolved':
        return {
          label: 'Resolved by PMC',
          className: 'bg-emerald-100 text-emerald-800 border-emerald-200'
        };
      case 'acknowledged':
        return {
          label: 'Acknowledged',
          className: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      default:
        return {
          label: 'Under Review',
          className: 'bg-amber-100 text-amber-800 border-amber-200'
        };
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'medium':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header and status filter pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Pune Community Civic Feed
            </h3>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
              {filteredReports.length} Reports
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Real citizen crowd reports helping city travelers avoid hazards and tracking PMC resolutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors ${
              statusFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter('under_review')}
            className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors ${
              statusFilter === 'under_review'
                ? 'bg-amber-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Under Review
          </button>
          <button
            onClick={() => setStatusFilter('acknowledged')}
            className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors ${
              statusFilter === 'acknowledged'
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Acknowledged
          </button>
          <button
            onClick={() => setStatusFilter('resolved')}
            className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors ${
              statusFilter === 'resolved'
                ? 'bg-emerald-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Resolved
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReports.map((report) => {
          const status = getStatusBadge(report.status);

          return (
            <div
              key={report.id}
              className={`p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-xs ${
                report.isUserGenerated
                  ? 'border-indigo-300 ring-2 ring-indigo-500/10'
                  : 'border-slate-200/90'
              }`}
            >
              <div className="space-y-3">
                {/* Meta Top: ID, Status Badge, Category & Demo Tag */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500">
                      #{report.id}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${status.className}`}>
                      {status.label}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase ${getSeverityBadge(report.severity)}`}>
                      {report.severity}
                    </span>
                  </div>

                  {report.isUserGenerated ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      User Submitted (Local)
                    </span>
                  ) : (
                    <DemoBadge label="Sample Report" />
                  )}
                </div>

                {/* Title & Locality */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">
                    {report.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                      {report.locality}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {report.timestamp}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {report.description}
                </p>

                {/* Photo preview if present */}
                {report.imageUrl && (
                  <div className="pt-1">
                    <button
                      onClick={() => setSelectedPhoto(report.imageUrl!)}
                      className="inline-flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Attached Photo Proof</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom: Upvote button & community validation */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">
                  Verified by citizen travelers
                </span>

                <button
                  onClick={() => onUpvote(report.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    report.userUpvoted
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title="Upvote to raise priority for Pune Municipal Corporation"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${report.userUpvoted ? 'fill-white' : ''}`} />
                  <span>Upvote ({report.upvotes})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Modal Preview if clicked */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-xl max-h-[80vh] overflow-hidden rounded-2xl bg-white p-2">
            <img src={selectedPhoto} alt="Report Attachment" className="w-full h-auto rounded-xl object-contain" />
            <p className="text-center text-xs text-slate-500 py-2">Click anywhere to close</p>
          </div>
        </div>
      )}
    </div>
  );
};
