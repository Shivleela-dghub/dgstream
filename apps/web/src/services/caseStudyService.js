import apiServerClient from '@/lib/apiServerClient.js' // your axios instance
import { CASE_STUDIES } from "@/data/caseStudies"; // keep for fallback

export const caseStudyService = {
  async getCaseStudies() {
    try {
      const response = await apiServerClient.get("/casestudies/all"); // matches backend route
      return response.data || []; // axios puts data here
    } catch (err) {
      console.error("API failed, using mock data", err);
      return CASE_STUDIES; // fallback so frontend doesn't break
    }
  },

  async getCaseStudyBySlug(slug) {
    try {
      const response = await apiServerClient.get(`/casestudies/${slug}`);
      return response.data;
    } catch (err) {
      console.error(err);
      return CASE_STUDIES.find(s => s.slug === slug) || null; // fallback
    }
  },

  async createCaseStudy(data) {
    const response = await apiServerClient.post("/casestudies", data);
    return response.data;
  },

  async updateCaseStudy(id, data) {
    const response = await apiServerClient.put(`/casestudies/${id}`, data);
    return response.data;
  },

  async deleteCaseStudy(id) {
    const response = await apiServerClient.delete(`/casestudies/${id}`);
    return response.data;
  },
};