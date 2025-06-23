import { motion } from 'framer-motion';
import { Search, Lightbulb, Wrench, GraduationCap, LineChart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import MethodStep from '../components/MethodStep';
import Button from '../components/Button';

const Method = () => {
  const methodSteps = [
    {
      number: 1,
      title: 'Analisi',
      description: 'Studiamo a fondo il tuo business, i processi e le esigenze specifiche per comprendere le sfide e le opportunità uniche della tua organizzazione.',
      icon: <Search size={24} />
    },
    {
      number: 2,
      title: 'Definizione Soluzioni',
      description: 'Elaboriamo strategie e soluzioni personalizzate, selezionando le tecnologie più adatte per rispondere alle tue esigenze specifiche.',
      icon: <Lightbulb size={24} />
    },
    {
      number: 3,
      title: 'Implementazione',
      description: 'Mettiamo in pratica le soluzioni definite con un approccio metodico e attento, garantendo un\'integrazione fluida con i sistemi esistenti.',
      icon: <Wrench size={24} />
    },
    {
      number: 4,
      title: 'Formazione',
      description: 'Formiamo il tuo team all\'utilizzo delle nuove tecnologie implementate, assicurandoci che possano sfruttarne appieno le potenzialità.',
      icon: <GraduationCap size={24} />
    },
    {
      number: 5,
      title: 'Monitoraggio Continuo',
      description: 'Forniamo un supporto continuativo, monitorando le performance delle soluzioni implementate e apportando ottimizzazioni quando necessario.',
      icon: <LineChart size={24} />
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Il Nostro Metodo</h1>
            <p className="text-xl text-gray-300 mb-8">
              Un approccio strutturato e personalizzato per garantire il successo dei tuoi progetti digitali, dalla comprensione delle esigenze all'implementazione e al supporto continuo.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Method Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Il Processo in 5 Fasi"
            subtitle="Un metodo collaudato per trasformare le sfide in opportunità."
            light
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            {methodSteps.map((step) => (
              <div key={step.number} className="mb-16 last:mb-0">
                <MethodStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Principles Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="I Nostri Principi"
            subtitle="Valori che guidano il nostro approccio al lavoro."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-gradient rounded-lg p-8 border-glow"
            >
              <h3 className="text-2xl font-semibold mb-4">Trasparenza e Comunicazione</h3>
              <p className="text-gray-300 mb-6">
                Crediamo che la trasparenza sia fondamentale per costruire relazioni durature con i nostri clienti. Per questo motivo, manteniamo una comunicazione chiara e costante durante tutte le fasi del progetto.
              </p>
              <p className="text-gray-300">
                Ti teniamo sempre aggiornato sui progressi, condividiamo apertamente sfide e soluzioni, e ti coinvolgiamo nelle decisioni importanti. Questo approccio collaborativo ci permette di allinearci costantemente alle tue aspettative e di adattarci rapidamente a eventuali cambiamenti.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="card-gradient rounded-lg p-6 border-glow">
                  <h4 className="text-xl font-semibold mb-2">Centralità del Cliente</h4>
                  <p className="text-gray-300">
                    Mettiamo sempre le tue esigenze al centro del nostro lavoro, adattando le nostre soluzioni ai tuoi obiettivi specifici e al tuo contesto aziendale.
                  </p>
                </div>
                
                <div className="card-gradient rounded-lg p-6 border-glow">
                  <h4 className="text-xl font-semibold mb-2">Eccellenza Tecnica</h4>
                  <p className="text-gray-300">
                    Ci impegniamo a mantenere i più alti standard di qualità in ogni aspetto del nostro lavoro, dalla progettazione all'implementazione e al supporto.
                  </p>
                </div>
                
                <div className="card-gradient rounded-lg p-6 border-glow">
                  <h4 className="text-xl font-semibold mb-2">Innovazione Continua</h4>
                  <p className="text-gray-300">
                    Restiamo costantemente aggiornati sulle ultime tecnologie e tendenze per offrirti soluzioni all'avanguardia che ti danno un vantaggio competitivo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="I Risultati che Otteniamo"
            subtitle="Il nostro approccio metodico porta a benefici concreti e misurabili."
            light
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="card-gradient rounded-lg p-6 text-center border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
            >
              <div className="text-4xl font-bold text-accent-bright mb-4">98%</div>
              <h3 className="text-xl font-semibold mb-2">Soddisfazione Cliente</h3>
              <p className="text-gray-300">
                I nostri clienti sono estremamente soddisfatti delle soluzioni implementate e del supporto ricevuto.
              </p>
            </motion.div>
            
            <motion.div
              className="card-gradient rounded-lg p-6 text-center border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
            >
              <div className="text-4xl font-bold text-accent-bright mb-4">40%</div>
              <h3 className="text-xl font-semibold mb-2">Riduzione Incidenti</h3>
              <p className="text-gray-300">
                Le nostre soluzioni di sicurezza riducono significativamente gli incidenti informatici nelle aziende.
              </p>
            </motion.div>
            
            <motion.div
              className="card-gradient rounded-lg p-6 text-center border-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
            >
              <div className="text-4xl font-bold text-accent-bright mb-4">35%</div>
              <h3 className="text-xl font-semibold mb-2">Aumento Efficienza</h3>
              <p className="text-gray-300">
                I nostri clienti sperimentano un notevole aumento dell'efficienza operativa dopo l'implementazione.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                Sei pronto a trasformare la tua azienda?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contattaci oggi stesso per scoprire come il nostro metodo può aiutarti a raggiungere i tuoi obiettivi digitali.
              </p>
              <Button 
                to="/contatti"
                variant="primary"
                size="lg"
              >
                Iniziamo Insieme
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Method;