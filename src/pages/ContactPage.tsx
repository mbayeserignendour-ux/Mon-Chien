import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Question sur une race');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Veuillez indiquer votre nom ou prénom.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return;
    }
    if (message.trim().length < 15) {
      setError('Votre message doit contenir au moins 15 caractères.');
      return;
    }
    if (!consent) {
      setError('Veuillez accepter le traitement de votre demande pour envoyer ce message.');
      return;
    }

    setError('');
    setSent(true);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-2 border-b border-[#141413]/12 pb-6">
        <div className="text-xs font-mono-num uppercase tracking-widest text-[#EA580C]">
          Rédaction & partenariats
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141413]">
          Contacter Univers des Chiens
        </h1>
        <p className="text-base text-[#141413]/75 max-w-2xl leading-relaxed">
          Vous souhaitez proposer une nouvelle fiche de race, poser une question à notre équipe
          éditoriale ou signaler une précision ? Écrivez-nous directement via ce formulaire.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#141413]/12 p-6 sm:p-8">
          {sent ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-[#141413]">
                Message envoyé avec succès
              </h2>
              <p className="text-sm text-[#141413]/75 max-w-md mx-auto leading-relaxed">
                Merci {name}. Notre équipe éditoriale a bien enregistré votre demande concernant «{' '}
                {subject} » et vous répondra prochainement à l’adresse {email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                  setConsent(false);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#141413] hover:bg-[#EA580C] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-[#141413]">
                    Nom complet *
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Camille Martin"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-sm text-[#141413] focus:outline-none focus:border-[#EA580C]"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-[#141413]">
                    Adresse e-mail *
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="camille@exemple.fr"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-sm text-[#141413] focus:outline-none focus:border-[#EA580C]"
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#141413]">Objet de la demande</span>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-sm text-[#141413] focus:outline-none focus:border-[#EA580C]"
                >
                  <option value="Question sur une race">Question sur une race</option>
                  <option value="Suggestion de nouvelle race">Suggestion de nouvelle race</option>
                  <option value="Conseil d’adoption">Conseil d’orientation et d’adoption</option>
                  <option value="Partenariat ou presse">Partenariat éducatif ou presse</option>
                </select>
              </label>

              <label className="block space-y-1.5">
                <span className="text-xs font-semibold text-[#141413]">Votre message *</span>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre question ou votre projet avec votre futur compagnon..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F3EC] border border-[#141413]/12 text-sm text-[#141413] focus:outline-none focus:border-[#EA580C]"
                />
              </label>

              <label className="flex items-start gap-2.5 text-xs text-[#141413]/75 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-[#EA580C]"
                />
                <span>
                  J’accepte que ces informations soient utilisées uniquement pour répondre à ma
                  demande éditoriale.
                </span>
              </label>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#EA580C] hover:bg-[#DC4E08] text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Sidebar */}
        <aside className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-2xl border border-[#141413]/12 p-6 space-y-5">
            <h2 className="font-display text-xl font-semibold text-[#141413]">
              Coordonnées éditoriales
            </h2>

            <div className="space-y-4 text-sm text-[#141413]/80">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#141413]">Rédaction & documentation</div>
                  <div>redaction@universdeschiens.fr</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#141413]">Siège éditorial</div>
                  <div>Lyon & Paris, France · Plateforme francophone internationale</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#141413]">Délai de réponse habituel</div>
                  <div>Sous 48 heures ouvrées pour toute demande documentaire</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#141413] text-white rounded-2xl p-6 space-y-2">
            <h3 className="font-display text-lg font-semibold">Note vétérinaire</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Les fiches et guides publiés sur Univers des Chiens ont une vocation purement
              informative et éducative. Pour tout symptôme ou diagnostic médical, consultez
              toujours un vétérinaire praticien.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
