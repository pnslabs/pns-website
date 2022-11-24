import {
  Builders,
  Header,
  Hero,
  Usecase,
  Teams,
  Faqs,
  GetStarted,
} from '../components';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GetStarted />
      <Builders />
      <Usecase />
      <Teams />
      <Faqs />
    </>
  );
}
