import { CASE_STUDIES } from "@/data/caseStudies";

export const caseStudyService = {
  async getCaseStudies() {
    return CASE_STUDIES;
    //when api is ready
      //const response = await api.get("/case-studies");
      //  return response.data;
  },
};