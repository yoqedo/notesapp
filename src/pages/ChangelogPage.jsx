export default function ChangelogPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Changelog</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            Version 1.0.0 – Initial Release
          </h2>
          <p className="text-sm text-gray-600">
            Veröffentlicht am 31. März 2026
          </p>

          <ul className="list-disc list-inside space-y-1 ">
            <li>
              Offline‑first Notizen – alle Daten bleiben lokal auf deinem Gerät
            </li>
            <li>
              Privacy‑First Architektur – keine Accounts, keine Cloud, keine
              Tracker
            </li>
            <li>Sofort‑Speichern – jede Änderung wird automatisch gesichert</li>
            <li>Minimalistisches, modernes Windows‑UI für maximale Klarheit</li>
            <li>Schnelle Suche und Kategorien für effizientes Arbeiten</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
