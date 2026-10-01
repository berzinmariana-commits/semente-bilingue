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
          <span className="eyebrow">🌱 APRENDA A TORNAR O SEU BEBÊ BILÍNGUE</span>
          <h1>
            Seu bebê pode crescer sabendo <span>inglês desde cedo</span>, mesmo que você não seja
            fluente.
          </h1>
          <p className="lead">
            Você não precisa morar fora, falar inglês o dia inteiro ou transformar sua casa em uma
            escola. Aprenda a inserir o inglês que você já sabe nos momentos que fazem parte da
            rotina do seu bebê, de forma simples, natural e possível para a sua família.
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

        {/* CALLOUT */}
        <section className="section callout-section">
          <div className="callout">
            <p>
              Não é cedo demais, pelo contrário, é a fase que o seu bebê aprende com mais
              facilidade!
            </p>
          </div>
        </section>

        {/* VIRADA */}
        <section className="section shift">
          <span className="eyebrow">💡 A VIRADA DE CHAVE</span>
          <h2 className="title">Saber como fazer faz toda a diferença.</h2>
          <div className="compare">
            <div className="col no">
              <h4>❌ O que muitos pais imaginam quando pensam em criar um bebê bilíngue:</h4>
              <ul>
                <li>&quot;Preciso ser fluente para começar.&quot;</li>
                <li>&quot;Preciso aprender muitas palavras antes.&quot;</li>
                <li>&quot;Se ele só assistir vídeos em inglês, vai aprender.&quot;</li>
                <li>&quot;Vou precisar falar inglês o dia inteiro.&quot;</li>
                <li>&quot;Se ele ainda não fala, talvez não esteja funcionando.&quot;</li>
              </ul>
            </div>
            <div className="col yes">
              <h4>🌱 O jeito Semente Bilíngue</h4>
              <ul>
                <li>Começar com o inglês que você já sabe</li>
                <li>Foca em aprender as palavras que fazem parte da rotina de vocês</li>
                <li>
                  Interação com os pais é melhor. Você vai aprender a brincar, cantar e interagir
                  em inglês.
                </li>
                <li>Criar pequenos momentos em inglês ao longo da rotina já gera resultados</li>
                <li>Continuar, mesmo antes das primeiras palavras</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="section problem">
          <span className="eyebrow">🤔 MITOS COMUNS</span>
          <h2 className="title">5 mitos que fazem pais adiarem o bilinguismo</h2>
          <div className="problem-list">
            <details className="problem-item">
              <summary>
                <span className="x">✕</span>
                <div className="problem-title">
                  <span className="mito-label">MITO 01</span>
                  <span className="mito-quote">
                    &quot;Só é possível criar um bebê bilíngue morando fora.&quot;
                  </span>
                </div>
                <span className="chev">+</span>
              </summary>
              <p>
                Seu bebê pode ter contato com o inglês mesmo crescendo em um lar onde o português
                (ou outro idioma) é a língua principal.
              </p>
            </details>
            <details className="problem-item">
              <summary>
                <span className="x">✕</span>
                <div className="problem-title">
                  <span className="mito-label">MITO 02</span>
                  <span className="mito-quote">
                    &quot;Meu inglês é básico demais para isso.&quot;
                  </span>
                </div>
                <span className="chev">+</span>
              </summary>
              <p>
                A boa notícia é que você não precisa ser fluente para começar. O inglês que você
                já sabe pode ser suficiente para criar momentos de contato, interação e
                aprendizado com seu bebê.
              </p>
            </details>
            <details className="problem-item">
              <summary>
                <span className="x">✕</span>
                <div className="problem-title">
                  <span className="mito-label">MITO 03</span>
                  <span className="mito-quote">
                    &quot;Preciso colocá-lo em uma escola bilíngue.&quot;
                  </span>
                </div>
                <span className="chev">+</span>
              </summary>
              <p>
                Em algum momento, ele provavelmente terá contato com o inglês na escola, seja ela
                bilíngue ou não. Mas a interação com o idioma pode começar muito antes, na rotina
                do seu bebê.
              </p>
              <p>
                Quando o idioma é vivido em momentos de afeto, brincadeira e conexão, ele deixa de
                ser apenas uma matéria e passa a fazer parte da vida.
              </p>
              <p>E isso faz toda a diferença.</p>
            </details>
            <details className="problem-item">
              <summary>
                <span className="x">✕</span>
                <div className="problem-title">
                  <span className="mito-label">MITO 04</span>
                  <span className="mito-quote">
                    &quot;Duas línguas vão confundir meu bebê, vou esperar ele crescer pra
                    começar!&quot;
                  </span>
                </div>
                <span className="chev">+</span>
              </summary>
              <p>
                Pelo contrário: os primeiros anos são justamente uma fase de grande capacidade de
                aprendizagem da linguagem. O cérebro do bebê está constantemente ouvindo,
                reconhecendo sons e construindo conexões e consegue fazer isso com mais de um
                idioma.
              </p>
              <p>Ele já está pronto para se tornar bilíngue, agora! 🌱</p>
            </details>
            <details className="problem-item">
              <summary>
                <span className="x">✕</span>
                <div className="problem-title">
                  <span className="mito-label">MITO 05</span>
                  <span className="mito-quote">
                    &quot;Para funcionar, preciso falar inglês com ele o dia inteiro.&quot;
                  </span>
                </div>
                <span className="chev">+</span>
              </summary>
              <p>
                Não é preciso transformar a casa inteira em inglês para começar. Momentos
                frequentes de interação, repetição e significado já criam oportunidades
                importantes de contato com o idioma.
              </p>
              <p>
                O segredo não é falar inglês o tempo todo, é aprender a inserir o inglês de forma
                consistente na rotina que vocês já têm.
              </p>
            </details>
          </div>
          <div className="punchline">
            Cada fase do seu bebê chega uma única vez.
            <br />
            Aproveite também a fase em que aprender é tão natural.
          </div>
        </section>

        {/* CIÊNCIA */}
        <section className="section science">
          <span className="eyebrow">🔬 ISSO AQUI É CIÊNCIA, NÃO MODINHA</span>
          <h2 className="title">
            O que a ciência já sabe sobre como os bebês aprendem idiomas:
          </h2>
          <div className="science-card">
            <div className="science-box">
              <h3>💬 01 — Os primeiros anos importam</h3>
              <p>
                O cérebro do bebê está especialmente envolvido em perceber e organizar os sons da
                linguagem desde muito cedo. Ao longo do primeiro ano, ele vai se especializando
                nos sons que fazem parte do seu ambiente linguístico.
              </p>
            </div>
            <div className="science-image-card">
              <svg
                viewBox="0 0 700 460"
                className="brain-chart"
                role="img"
                aria-label="Gráfico Harvard: desenvolvimento da linguagem no cérebro do bebê"
              >
                <rect width="700" height="460" fill="#ffffff" />
                <text x="100" y="42" fontFamily="Georgia, serif" fontSize="24" fill="#1a1a1a">
                  Center on the Developing Child
                </text>
                <text
                  x="100"
                  y="62"
                  fontFamily="Arial, sans-serif"
                  fontSize="13"
                  letterSpacing="1"
                  fill="#1a1a1a"
                >
                  HARVARD UNIVERSITY
                </text>
                <rect x="20" y="18" width="52" height="52" rx="4" fill="#A41E34" />
                <text
                  x="46"
                  y="52"
                  fontFamily="Georgia, serif"
                  fontSize="22"
                  fill="#ffffff"
                  textAnchor="middle"
                >
                  H
                </text>

                <text
                  x="350"
                  y="108"
                  fontFamily="'Baloo 2', Arial, sans-serif"
                  fontSize="30"
                  fontWeight="800"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  Human Brain Development
                </text>
                <text
                  x="350"
                  y="134"
                  fontFamily="Arial, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  Neural Connections for Language Develop Sequentially
                </text>

                <rect x="195" y="175" width="330" height="205" fill="#f3d4d8" />

                <text
                  x="330"
                  y="165"
                  fontFamily="Arial, sans-serif"
                  fontSize="16"
                  fontWeight="700"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  Language
                </text>
                <line x1="340" y1="172" x2="345" y2="208" stroke="#555555" strokeWidth="1.5" />

                <path
                  d="M140,380 C 190,330 230,225 310,210 C 345,203 375,210 410,245 C 450,290 490,315 540,322 C 590,328 635,328 680,325"
                  fill="none"
                  stroke="#1b1664"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <line x1="60" y1="380" x2="680" y2="380" stroke="#000000" strokeWidth="3" />

                <text
                  x="360"
                  y="358"
                  fontFamily="'Baloo 2', Arial, sans-serif"
                  fontSize="17"
                  fontWeight="800"
                  fill="#B23A48"
                  textAnchor="middle"
                >
                  FIRST YEAR
                </text>

                {[
                  { x: 140, label: "0" },
                  { x: 350, label: "6" },
                  { x: 480, label: "1" },
                  { x: 535, label: "2" },
                  { x: 585, label: "3" },
                  { x: 630, label: "4" },
                  { x: 668, label: "5" },
                ].map((tick) => (
                  <g key={tick.label + tick.x}>
                    <line
                      x1={tick.x}
                      y1="380"
                      x2={tick.x}
                      y2="388"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                    <text
                      x={tick.x}
                      y="402"
                      fontFamily="Arial, sans-serif"
                      fontSize="15"
                      fontWeight="700"
                      fill="#1a1a1a"
                      textAnchor="middle"
                    >
                      {tick.label}
                    </text>
                  </g>
                ))}

                <text
                  x="140"
                  y="430"
                  fontFamily="Arial, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  Birth
                </text>
                <text
                  x="350"
                  y="430"
                  fontFamily="Arial, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  (Months)
                </text>
                <text
                  x="575"
                  y="430"
                  fontFamily="Arial, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  (Years)
                </text>

                <text
                  x="680"
                  y="452"
                  fontFamily="Arial, sans-serif"
                  fontSize="13"
                  fill="#444444"
                  textAnchor="end"
                >
                  Source: C.A. Nelson (2000)
                </text>
              </svg>
              <p>
                <strong>Explicação:</strong> Segundo o gráfico do Harvard Center on the Developing
                Child, aos 6 meses o bebê já está em pleno processo de aprendizagem da linguagem.
                Enquanto muitos pais ainda esperam as primeiras palavras, ele já está ouvindo,
                reconhecendo sons e construindo conexões. Por isso, inserir o inglês nessa fase é
                aproveitar um período em que o cérebro está especialmente preparado para aprender
                linguagem, que com o passar dos anos e da vida adulta, não se mantém igual.
              </p>
            </div>
          </div>
          <div className="science-card">
            <div className="science-box">
              <h3>🧠 02 — Dois idiomas, mais benefícios para o cérebro</h3>
              <p>
                Além de aprender uma nova língua, o contato com dois idiomas desde cedo pode
                favorecer habilidades como atenção, flexibilidade cognitiva e capacidade de
                alternar entre informações.
              </p>
              <p>É mais uma forma de o cérebro aprender, se adaptar e fazer conexões.</p>
            </div>
            <img src="/images/image-3.jpeg" alt="Estudo bilinguismo funções executivas" />
          </div>
          <div className="science-card">
            <div className="science-box">
              <h3>👶 03 — Antes das palavras, vem a percepção</h3>
              <p>
                O bebê não começa aprendendo a falar. Primeiro, ele escuta, observa, reconhece e
                diferencia.
              </p>
              <p>
                Conversar, cantar, brincar, nomear o que estão fazendo e responder às suas
                tentativas de comunicação ajuda a construir a linguagem desde cedo.
              </p>
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="section bio">
          <img src="/images/image-4.png" alt="Hello, eu sou a Mari" />
          <p className="lead">
            Sou a criadora do Método Semente Bilíngue, desenvolvido a partir da minha vivência
            com a língua inglesa nos Estados Unidos e, principalmente, da experiência de aplicar
            esse conhecimento na minha própria maternidade.
          </p>
          <p className="lead">
            Ao me tornar mãe, percebi que não precisava morar em um país de língua inglesa, falar
            inglês o dia inteiro ou ser fluente para oferecer esse idioma às minhas filhas.
          </p>
          <p className="lead">
            Mesmo vivendo em um ambiente predominantemente em português, no Brasil e atualmente
            em Portugal, desenvolvi uma forma simples e estratégica de inserir o inglês na rotina
            delas desde os primeiros meses de vida.
          </p>
          <p className="lead">
            Foi dessa experiência que nasceu o Método Semente Bilíngue: 5 etapas para ajudar
            famílias a transformar a rotina que já têm em oportunidades reais de contato com o
            inglês.
          </p>
          <p className="lead">Agora, quero ensinar você a fazer o mesmo com o seu bebê.</p>
          <a href={CHECKOUT_URL} className="btn">
            QUERO APRENDER
          </a>
        </section>

        {/* MÉTODO */}
        <section className="section method">
          <span className="eyebrow">🌱 CONHEÇA O MÉTODO</span>
          <h2 className="title">5 etapas para tornar o seu bebê bilíngue.</h2>
          <p className="lead method-intro-title">ANTES DE FALAR, O BEBÊ ABSORVE.</p>
          <p className="lead">
            Assim como uma semente precisa de tempo e cuidado antes de dar frutos, um bebê
            precisa primeiro ouvir, observar, reconhecer e vivenciar uma língua antes de começar a
            produzi-la.
          </p>
          <p className="lead">
            Por isso, o bilinguismo começa muito antes das primeiras palavras. O Método Semente
            Bilíngue ensina você a oferecer o inglês de forma natural, dentro da rotina,
            respeitando esse processo.
          </p>
          <div className="method-timeline" id="tlContainer">
            <div className="tl-line-base" />
            <div className="tl-line-fill" id="tlFill" />
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-1)" }}>
                1
              </div>
              <div className="tl-content step-1">
                <h4>🌱 Preparar o solo</h4>
                <p>
                  Você aprende a preparar o ambiente da sua casa para o inglês usando a rotina que
                  seu bebê já tem.
                </p>
                <p>Sem criar uma rotina impossível de manter.</p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-2)" }}>
                2
              </div>
              <div className="tl-content step-2">
                <h4>🗣️ Plantar a semente</h4>
                <p>
                  Aqui você aprende como começar a interagir em inglês com seu bebê na prática.
                </p>
                <p>
                  Frases simples, vocabulário, músicas e interações que fazem sentido para a fase
                  da criança e com o nível do seu inglês.
                </p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-3)" }}>
                3
              </div>
              <div className="tl-content step-3">
                <h4>💧 Regar</h4>
                <p>É aqui que muitos pais travam.</p>
                <p>
                  Eles até começam, mas não sabem como manter o idioma vivo de uma forma que gere
                  aprendizado.
                </p>
                <p>
                  Você vai saber exatamente como regar o inglês com intenção, repetição, interação
                  e estratégias que favorecem a aprendizagem.
                </p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-4)" }}>
                4
              </div>
              <div className="tl-content step-4">
                <h4>🍎 Colher</h4>
                <p>E então começam a aparecer os primeiros frutos.</p>
                <p>
                  Seu bebê começa a reconhecer, compreender, responder e, progressivamente,
                  interagir em inglês, mesmo sem morar em um país de língua inglesa. É incrível de
                  ver o potencial deles nessa fase! 🤩
                </p>
              </div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" style={{ background: "var(--etapa-5)" }}>
                5
              </div>
              <div className="tl-content step-5">
                <h4>🌳 Expandir</h4>
                <p>
                  Depois que você entende como funciona, o inglês deixa de ser uma atividade
                  isolada.
                </p>
                <p>
                  Você aprende a levar o idioma para outros momentos da sua casa, da sua rotina e
                  da vida real da sua família.
                </p>
                <p>
                  Não existe uma única forma de criar um bebê bilíngue, existe a forma que
                  funciona para a sua família, e eu te explico como conduzir em cada um deles.
                </p>
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
                <h4>🎯 Método Semente Bilíngue completo</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>📘 Apostila PDF do Método Semente Bilíngue</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🎥 Vídeos práticos do inglês na rotina do bebê</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🗣 Guia de frases do dia a dia</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>📺 Lista de canais que ensinam</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🎵 Playlist de canções estratégicas</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>🧠 Guia: O que NÃO fazer!</h4>
              </div>
            </div>
            <div className="offer-item">
              <span className="ok">✓</span>
              <div>
                <h4>📱 Grupo VIP no Instagram</h4>
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
