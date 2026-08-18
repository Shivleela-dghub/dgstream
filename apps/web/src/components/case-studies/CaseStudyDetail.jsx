import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { caseStudyService } from "@/services/caseStudyService";
import { FONT_FAMILIES } from "../shared/FontColors";
import { Download } from "lucide-react";
const { clash, mono } = FONT_FAMILIES;

// Bundle the worker locally via Vite instead of pointing at a CDN — avoids
// version-mismatch 404s when pdf.js changes its CDN filename/extension between releases
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    caseStudyService.getCaseStudyBySlug(slug)
      .then(setStudy)
      .finally(() => setLoading(false));
  }, [slug]);

  // keep the rendered PDF pages responsive to the container width
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [study]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;

  if (!study) {
    return (
      <div className="py-24 text-center">
        <p style={{ ...mono, color: "#6B7280" }} className="uppercase text-xs tracking-[0.18em]">
          Case study not found
        </p>
        <Link to="/case-studies" className="inline-block mt-6 font-bold underline" style={clash}>
          Back to all case studies
        </Link>
      </div>
    );
  }

  if (!study.pdfFile) {
    return (
      <div className="py-24 text-center">
        <p style={{ ...mono, color: "#6B7280" }} className="uppercase text-xs tracking-[0.18em]">
          No PDF uploaded for this case study yet
        </p>
        <Link to="/case-studies" className="inline-block mt-6 font-bold underline" style={clash}>
          Back to all case studies
        </Link>
      </div>
    );
  }

  const pdfUrl = /^https?:\/\//i.test(study.pdfFile)
    ? study.pdfFile
    : `${study.pdfFile}`;

  return (
    <div className="py-10">
      <div className="max-w-[1140px] mx-auto px-6 md:px-16">

        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em]"
            style={{ ...mono, color: "#6B7280" }}
          >
            ← All case studies
          </Link>
        </div>

        <h1 className="font-extrabold leading-tight mb-8" style={{ ...clash, fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          {study.title}
        </h1>

        {/* Rendered PDF pages — stacked vertically, scrolls as part of the normal page */}
        <div ref={containerRef} className="w-full flex flex-col items-center gap-6">
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<div className="py-20 text-center" style={{ color: "#6B7280" }}>Loading case study…</div>}
            error={
              <div className="py-20 text-center" style={{ color: "#6B7280" }}>
                Couldn't load the PDF.{" "}
                <a href={pdfUrl} target="_blank" rel="noreferrer" className="underline" style={{ color: "#5C9A2F" }}>
                  Open it directly instead
                </a>.
              </div>
            }
          >
            {numPages &&
              Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={i}
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="shadow-sm border"
                  loading={<div className="h-[600px] w-full bg-gray-100 animate-pulse" />}
                />
              ))}
          </Document>
        </div>

        <div className="mt-16 pt-10 border-t border-[#E5E5E5] text-center">
          <Link to="/case-studies" className="inline-block font-bold uppercase text-[0.85rem]" style={clash}>
            View all case studies →
          </Link>
        </div>
      </div>
    </div>
  );
}