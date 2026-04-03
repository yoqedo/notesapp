export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p className="mb-4">
          Der Schutz deiner Daten ist mir wichtig. Diese Website und die Notizen
          App wurden so entwickelt, dass nur die Daten verarbeitet werden, die
          technisch notwendig sind. Es findet keine Weitergabe an Dritte statt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          Verantwortliche Stelle
        </h2>
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

        <h2 className="text-xl font-semibold mt-8 mb-2">Erhobene Daten</h2>
        <p className="mb-4">
          Beim Besuch dieser Website werden automatisch technische Daten erfasst
          (IP-Adresse, Browser, Betriebssystem, Datum, Uhrzeit, besuchte
          Seiten). Diese Daten sind notwendig, um die Website bereitzustellen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Hosting</h2>
        <p className="mb-4">
          Die Website wird bei einem europäischen Anbieter gehostet. Logfiles
          werden zur technischen Sicherheit gespeichert und automatisch
          gelöscht.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Notizen App</h2>
        <p className="mb-4">
          Die App verarbeitet ausschließlich lokale Daten auf deinem Gerät. Es
          findet keine Übertragung an den Entwickler statt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Rechte der Nutzer</h2>
        <p className="mb-4">
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
          Widerruf einer Einwilligung.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Änderungen</h2>
        <p className="mb-4">
          Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden.
        </p>
      </div>
    </div>
  );
}
