import apiServerClient from '@/lib/apiServerClient.js';

export const caseStudyService = {
  // Published case studies for the public listing page
  async getCaseStudies() {
    const { data } = await apiServerClient.get('/casestudies/all');
    return data;
  },

  // Single published case study by slug, for the detail/view page
  async getCaseStudyBySlug(slug) {
    const { data } = await apiServerClient.get(`/casestudies/${slug}`);
    return data;
  },
};