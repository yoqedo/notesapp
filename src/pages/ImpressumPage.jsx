export default function ImpressumPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <p className="mb-4">Angaben gemäß schweizerischem Recht (OR / UWG)</p>

        <p className="mb-4">
          &lt;Nachname&gt;
          <br />
          &lt;Adresse&gt;
          <br />
          &lt;PLZ, Ort&gt;
          <br />
          Schweiz
          <br />
          E-Mail: &lt;deine E-Mail&gt;
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Haftungsausschluss</h2>
        <p className="mb-4">
          Alle Inhalte wurden sorgfältig erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität wird keine Haftung übernommen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Links</h2>
        <p className="mb-4">
          Für Inhalte externer Websites wird keine Verantwortung übernommen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Urheberrecht</h2>
        <p className="mb-4">
          Alle Inhalte sind urheberrechtlich geschützt. Eine Nutzung ohne
          Zustimmung ist nicht gestattet.
        </p>
      </div>
    </div>
  );
}
