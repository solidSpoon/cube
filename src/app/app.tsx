import AlgorithmSection from "components/organisms/algorithm-section";
import ollSections from "app/cases/oll";
import pllSections from "app/cases/pll";

const sections = [...ollSections, ...pllSections];

function App() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-gray-950 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
            CFOP Algorithms
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-gray-950">
            CFOP Algorithm Sheet
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-500">
            A clean reference for two-look OLL and two-look PLL, organized
            around quick top-layer recognition.
          </p>
        </header>
        <div>
          {sections.map((section) => (
            <AlgorithmSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
