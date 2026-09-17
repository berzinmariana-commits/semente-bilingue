"use client";

import { useEffect } from "react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/2ctqOP0";

export default function SalesPage() {
  useEffect(() => {
    const container = document.getElementById("tlContainer");
    const fillEl = document.getElementById("tlFill");
    if (!container || !fillEl) return;

    function update() {
      const triggerY = window.innerHeight * 0.78;
      const containerRect = container!.getBoundingClientRect();
      const steps = container!.querySelectorAll(".tl-step");
      let fillPx = 0;
      steps.forEach((step) => {
        const dot = step.querySelector(".tl-dot");
        if (!dot) return;
        const dotRect = dot.getBoundingClientRect();
        const dotCenterY = dotRect.top + dotRect.height / 2;
        if (dotCenterY <= triggerY) {
          step.classList.add("in-view");
          fillPx = dotCenterY - containerRect.top;
        }
      });
      fillEl!.style.height = Math.max(0, fillPx) + "px";
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const timeout = setTimeout(update, 60);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="page">
      {/* eslint-disable @next/next/no-img-element */}
      <div className="topbar">
        <img src="/images/image-1.png" alt="Semente Bilíngue" />
        <a href={CHECKOUT_URL} className="pill">
          Garantir vaga
        </a>
      </div>

        {/* HERO */}
        <section className="section hero">
          <span className="eyebrow">🌱 MESMO SEM INGLÊS FLUENTE</span>
          <h1>
            Seu bebê pode crescer falando <span>dois idiomas</span> — sem escola bilíngue.
          </h1>
          <p className="lead">
            O Método Semente Bilíngue te ensina, passo a passo, a criar um ambiente de inglês em
            casa — do jeito que seu bebê aprende português: vivendo, não estudando.
          </p>
          <div className="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/veqtFLTf2p8?rel=0"
              title="Semente Bilíngue"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a href={CHECKOUT_URL} className="btn">
            🌟 Quero criar meu bebê bilíngue
          </a>
          <div className="trust">
            <span>✅ Acesso imediato</span>
            <span>🔒 Compra segura</span>
            <span>🛡️ 7 dias de garantia</span>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="section problem">
          <span className="eyebrow">🤔 O ERRO MAIS COMUM</span>
          <h2 className="title">A maioria das famílias espera.</h2>
          <div className="problem-list">
            <div className="problem-item">
              <span className="x">✕</span>
              <p>Espera o filho &quot;crescer um pouco&quot; primeiro</p>
            </div>
            <div className="problem-item">
              <span className="x">✕</span>
              <p>Acha que precisa de escola bilíngue</p>
            </div>
            <div className="problem-item">
              <span className="x">✕</span>
              <p>Acha que precisa gastar uma fortuna</p>
            </div>
            <div className="problem-item">
              <span className="x">✕</span>
              <p>Acha que precisa ser fluente antes de começar</p>
            </div>
          </div>
          <div className="punchline">
            Não existe momento perfeito. Existe o momento mais fácil — e ele é{" "}
            <span style={{ color: "var(--ambar-400)" }}>agora</span>.
          </div>
        </section>

        {/* VIRADA */}
        <section className="section shift">
          <span className="eyebrow">💡 A VIRADA DE CHAVE</span>
          <h2 className="title">
            Ninguém te ensinou português. Você <em>viveu</em> português.
          </h2>
          <p className="lead">
            Foi assim que você aprendeu: sem aula marcada, sem caderno, sem prova. O inglês do seu
            bebê pode nascer do mesmo jeito — dentro de casa.
          </p>
          <div className="compare">
            <div className="col no">
              <h4>📚 Ensinar</h4>
              <div className="sub">o jeito da escola</div>
              <ul>
                <li>⏰ Aula e horário marcado</li>
                <li>📝 Decorar palavras</li>
                <li>😰 Prova e cobrança</li>
              </ul>
            </div>
            <div className="col yes">
              <h4>🏡 Conviver</h4>
              <div className="sub">o jeito de casa</div>
              <ul>
                <li>💬 Conversa do dia a dia</li>
                <li>🎵 Música e brincadeira</li>
                <li>🔁 Repetição natural</li>
              </ul>
            </div>
          </div>
          <div className="callout">
            <div className="script">Não é ensinar.</div>
            <p>É conviver. E conviver você já sabe fazer.</p>
          </div>
        </section>

        {/* CIÊNCIA */}
        <section className="section science">
          <span className="eyebrow">🔬 NÃO É ACHISMO</span>
          <h2 className="title">Isso aqui é ciência, não modinha.</h2>
          <div className="science-card">
            <img src="/images/image-2.jpeg" alt="Gráfico Harvard desenvolvimento cerebral" />
            <p>
              <span className="tag">Harvard University</span> confirma: a janela mais forte do
              cérebro pra linguagem é entre <b>0 e 3 anos</b>.
            </p>
          </div>
          <div className="science-card">
            <img src="/images/image-3.jpeg" alt="Estudo bilinguismo funções executivas" />
            <p>
              Crianças bilíngues saem na frente em{" "}
              <span className="tag">memória, atenção e foco</span> — com evidência estatística
              forte.
            </p>
          </div>
        </section>

        {/* BIO */}
        <section className="section bio">
          <div className="script">Hello.</div>
          <img src="/images/image-4.jpeg" alt="Mari e a família" />
          <h2 className="title">Eu sou a Mari</h2>
          <p className="lead">
            Sou mãe de duas meninas — uma nascida no Brasil, outra em Portugal — e vivo cercada de
            português. Mesmo assim, consegui torná-las bilíngues com 5 etapas simples. Criei o
            Método Semente Bilíngue pra qualquer mãe repetir em casa.
          </p>
        </section>

        {/* MÉTODO */}
        <section className="section method">
          <span className="eyebrow">🌱 O MÉTODO</span>
          <h2 className="title">Do jeito que uma semente cresce.</h2>
          <p className="lead">
            Sem pressa, sem pular fases — o inglês do seu bebê cresce em etapas naturais.
          </p>
          <div className="method-timeline" id="tlContainer">
            <div className="tl-line-base" />
            <div className="tl-line-fill" id="tlFill" />
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-1)" }}>
                1
              </div>
              <div className="tl-content">
                <h4>🌱 Plantar</h4>
                <p>Expõe o bebê ao inglês em situações reais do dia a dia.</p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-2)" }}>
                2
              </div>
              <div className="tl-content">
                <h4>🌿 Reconhecer</h4>
                <p>O bebê entende o contexto e associa palavras a ações.</p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-3)" }}>
                3
              </div>
              <div className="tl-content">
                <h4>🌾 Repetir</h4>
                <p>O bebê começa a imitar sons e palavras que ouviu.</p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-4)" }}>
                4
              </div>
              <div className="tl-content">
                <h4>🌻 Florescer</h4>
                <p>O bebê usa o inglês pra se comunicar de verdade.</p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-5)" }}>
                5
              </div>
              <div className="tl-content">
                <h4>🍊 Colher</h4>
                <p>Frases completas e autonomia no segundo idioma.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section className="section offer">
          <span className="eyebrow">🎁 O QUE VOCÊ RECEBE</span>
          <h2 className="title">Tudo pra aplicar o método em casa</h2>
          <div className="offer-list">
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🎓 Curso completo</h4>
                <p>Passo a passo pra aplicar o método, sem enrolação.</p>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>📖 Guia de vocabulário</h4>
                <p>Frases prontas pra usar no dia a dia do bebê.</p>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>👨‍👩‍👧 Comunidade de pais</h4>
                <p>Troca diária com quem tá vivendo o mesmo momento.</p>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>📔 Diário de Marcos</h4>
                <p>Acompanhe a evolução bilíngue do seu bebê.</p>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🎥 Aulas ao vivo</h4>
                <p>Tire suas dúvidas direto comigo.</p>
              </div>
            </div>
          </div>
          <div className="price-card">
            <div className="pt">Método Semente Bilíngue</div>
            <div className="old">De R$ 597</div>
            <div className="big">12x R$ 29,70</div>
            <div className="sub">ou R$ 297 à vista</div>
            <a href={CHECKOUT_URL} className="btn">
              🌟 Quero a minha vaga
            </a>
            <div className="note">Pagamento seguro pela Kiwify · acesso imediato</div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section testi">
          <span className="eyebrow">💬 RESULTADOS REAIS</span>
          <h2 className="title">O que as famílias contam</h2>
          <div className="testi-stack">
            <img src="/images/image-5.jpeg" alt="Depoimento de família" />
            <img src="/images/image-6.jpeg" alt="Depoimento de família" />
            <img src="/images/image-7.jpeg" alt="Depoimento de família" />
          </div>
          <div className="testi-big">
            <img src="/images/image-8.jpeg" alt="Depoimento de família" />
            <img src="/images/image-9.jpeg" alt="Depoimento de família" />
            <img src="/images/image-10.jpeg" alt="Depoimento de família" />
          </div>
        </section>

        {/* GARANTIA + FAQ */}
        <section className="section guarantee" id="faq">
          <span className="eyebrow">🛡️ ZERO RISCO</span>
          <h2 className="title">Perguntas frequentes</h2>
          <div className="shield">
            <span className="ic">🛡️</span>
            <p>
              <b>7 dias de garantia incondicional.</b> Não gostou? Devolvemos 100% do seu
              dinheiro.
            </p>
          </div>
          <details className="faq-item">
            <summary>
              Preciso ser fluente em inglês?<span className="chev">+</span>
            </summary>
            <p>Não. O método nasceu de uma mãe que começou com o básico.</p>
          </details>
          <details className="faq-item">
            <summary>
              Meu bebê já passou dos 3 anos, funciona?<span className="chev">+</span>
            </summary>
            <p>Sim, várias famílias aplicam com sucesso até os 6 anos.</p>
          </details>
          <details className="faq-item">
            <summary>
              Preciso de horário fixo pra isso?<span className="chev">+</span>
            </summary>
            <p>Não. Comece com pequenos momentos do dia a dia.</p>
          </details>
          <details className="faq-item">
            <summary>
              Quando eu tenho acesso ao curso?<span className="chev">+</span>
            </summary>
            <p>Assim que a compra é confirmada, na hora.</p>
          </details>
        </section>

        {/* CTA FINAL */}
        <section className="section final">
          <h2>
            Seu bebê já está no melhor momento pra aprender dois idiomas.
            <br />E agora, você também.
          </h2>
          <a href={CHECKOUT_URL} className="btn">
            🌟 Quero criar meu bebê bilíngue
          </a>
          <div className="trust">
            <span>✅ Acesso imediato</span>
            <span>🔒 Compra segura</span>
            <span>🛡️ 7 dias de garantia</span>
          </div>
        </section>

      <div className="foot">
        <span className="badge-logo">
          <img src="/images/image-1.png" alt="Semente Bilíngue" />
        </span>
        <p>
          © Semente Bilíngue · Método criado por Mari
          <br />
          Pagamentos processados pela Kiwify
        </p>
      </div>
    </div>
  );
}
