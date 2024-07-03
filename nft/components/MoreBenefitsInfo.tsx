export default function MoreBenefitsInfo({
  title,
  listAdvantages,
}: {
  title: string;
  listAdvantages: Record<string, string | undefined>;
}) {
  return (
    <div className="w-full sm:w-[458px]">
      <h5 className="mb-20 text-3xl sm:text-4xl font-semibold text-white">{title}</h5>
      <ul className="flex flex-col gap-6">
        {Object.entries(listAdvantages).map(
          ([titleAdvantage, valueAdvantage]) => (
            <li
              className="flex gap-6 before:content-custom-before"
              key={titleAdvantage}
            >
              <div>
                <h6 className="mb-3 sm:mb-6 text-2xl sm:text-3xl font-semibold text-white">
                  {titleAdvantage}
                </h6>
                <p className="text-lg sm:text-xl font-normal text-backtext">
                  {valueAdvantage}
                </p>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
