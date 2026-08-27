import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '@/components/bpo-ai-annotations/Hero';
import ServiceTabs from '@/components/bpo-ai-annotations/ServiceTabs';
import AnnotationTypes from '@/components/bpo-ai-annotations/AnnotationTypes';
import Process from '@/components/bpo-ai-annotations/Process';
import QualityBand from '@/components/bpo-ai-annotations/QualityBand';
import Industries from '@/components/bpo-ai-annotations/Industries';
import Hiring from '@/components/bpo-ai-annotations/Hiring';
import Team from '@/components/bpo-ai-annotations/Team';
import Pricing from '@/components/bpo-ai-annotations/Pricing';

export default function BPOAIAnnotation() {
  return (
    <>
      <Header />
      <Hero />
      <ServiceTabs />
      <AnnotationTypes />
      <Process />
      <QualityBand />
      <Industries />
      <Hiring />
      <Team />
      <Pricing />
      <Footer />
    </>
  );
}
