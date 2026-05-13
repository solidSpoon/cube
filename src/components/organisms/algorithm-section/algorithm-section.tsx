import { ComponentProps, forwardRef } from "react";
import CubeCaseDiagram from "components/atoms/cube-case-diagram";
import type { AlgorithmSection as AlgorithmSectionType } from "app/cases/types";

interface AlgorithmSectionProps
  extends Omit<ComponentProps<"section">, "className" | "children"> {
  section: AlgorithmSectionType;
}

const AlgorithmSection = forwardRef<HTMLElement, AlgorithmSectionProps>(
  ({ section, ...rest }, ref) => {
    return (
      <section ref={ref} className="py-8" {...rest}>
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              {section.id.startsWith("oll") ? "OLL" : "PLL"}
            </p>
            <h2 className="text-2xl font-semibold text-gray-950">{section.title}</h2>
          </div>
          <p className="text-sm text-gray-500">{section.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {section.cases.map((item, index) => (
            <article key={item.id} className="flex flex-col items-center text-center">
              <CubeCaseDiagram {...item.diagram} />
              <div className="mt-3 min-h-22">
                <h3 className="text-base font-semibold text-gray-950">
                  {index + 1}. {item.name}
                </h3>
                <p className="mt-1 break-words text-lg font-bold leading-snug text-gray-800">
                  {item.algorithm}
                </p>
              </div>
              {item.note && (
                <p className="mt-2 max-w-60 text-sm leading-6 text-gray-500">{item.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    );
  }
);

AlgorithmSection.displayName = "AlgorithmSection";

export default AlgorithmSection;
