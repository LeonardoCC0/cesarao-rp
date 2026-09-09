  const icons = {
    vip: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 8l4 3 5-7 5 7 4-3-2 10H5L3 8Z" fill="var(--gold)"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 16v-3l2-5a2 2 0 0 1 2-1.4h8A2 2 0 0 1 18 8l2 5v3" stroke="var(--gold)" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7.5" cy="16.5" r="1.6" fill="var(--gold)"/><circle cx="16.5" cy="16.5" r="1.6" fill="var(--gold)"/></svg>',
    gun: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 13h9l2-3h5l1 2-2 1v3h-3v-2H9l-1 3H4l-1-2 2-1-2-1Z" stroke="var(--gold)" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    shirt: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 4 4 7l2 3 2-1v9h8V9l2 1 2-3-4-3-2 2h-2L8 4Z" stroke="var(--gold)" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    house: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 11 12 4l8 7" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round"/><path d="M6 10v9h12v-9" stroke="var(--gold)" stroke-width="1.6"/></svg>',
    tool: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 4a4 4 0 0 0-5 5L4 14v3h3l5-5a4 4 0 0 0 5-5l-2.5 2.5-2-2L15 4Z" stroke="var(--gold)" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    combo: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" rx="1" stroke="var(--gold)" stroke-width="1.5"/><rect x="13" y="4" width="7" height="7" rx="1" stroke="var(--gold)" stroke-width="1.5"/><rect x="4" y="13" width="7" height="7" rx="1" stroke="var(--gold)" stroke-width="1.5"/><rect x="13" y="13" width="7" height="7" rx="1" stroke="var(--gold)" stroke-width="1.5"/></svg>'
  };

  const products = {
    vips: [
      { name: "VIP Bronze — 30 dias", desc: "Prioridade na fila e comandos básicos de RP.", price: 19.90, icon: "vip", badge: null },
      { name: "VIP Prata — 30 dias", desc: "Tudo do Bronze + slot extra de veículo.", price: 34.90, icon: "vip", badge: {text:"MAIS VENDIDO", cls:"badge-gold"} },
      { name: "VIP Ouro — 30 dias", desc: "Prioridade máxima, kit de boas-vindas e /car exclusivo.", price: 54.90, icon: "vip", badge: null },
      { name: "VIP Diamante — 30 dias", desc: "Todos os benefícios + acesso a áreas exclusivas.", price: 79.90, icon: "vip", badge: {text:"PREMIUM", cls:"badge-amber"} },
      { name: "VIP Vitalício", desc: "Todos os benefícios do Diamante, para sempre.", price: 249.90, icon: "vip", badge: {text:"OFERTA", cls:"badge-amber"} },
      { name: "Token de VIP Presente", desc: "Presenteie outro jogador com 30 dias de VIP Ouro.", price: 54.90, icon: "vip", badge: null }
    ],
    blindados: [
      { name: "Sultan RS Blindado", desc: "Blindagem baixa, ótimo custo-benefício.", price: 44.90, icon: "car", badge: {text:"BLINDAGEM BAIXA", cls:"badge-olive"} },
      { name: "Comet Blindado", desc: "Esportivo com blindagem média.", price: 69.90, icon: "car", badge: {text:"BLINDAGEM MÉDIA", cls:"badge-amber"} },
      { name: "Baller Blindado", desc: "SUV reforçada, blindagem média.", price: 74.90, icon: "car", badge: {text:"BLINDAGEM MÉDIA", cls:"badge-amber"} },
      { name: "Kuruma Blindado", desc: "O clássico da cidade, blindagem alta.", price: 99.90, icon: "car", badge: {text:"BLINDAGEM ALTA", cls:"badge-gold"} },
      { name: "Everon Blindado", desc: "Off-road pesado com blindagem alta.", price: 109.90, icon: "car", badge: {text:"BLINDAGEM ALTA", cls:"badge-gold"} },
      { name: "Jester Blindado", desc: "Leve, ágil e discreto, blindagem baixa.", price: 49.90, icon: "car", badge: {text:"BLINDAGEM BAIXA", cls:"badge-olive"} }
    ],
    skins: [
      { name: "Pistol .50 — Ouro Cesarão", desc: "Acabamento dourado com gravação da facção.", price: 24.90, icon: "gun", badge: {text:"EXCLUSIVA", cls:"badge-gold"} },
      { name: "Carbine Rifle — Grafite Urbano", desc: "Camuflagem urbana fosca.", price: 29.90, icon: "gun", badge: null },
      { name: "SMG — Prata Fosco", desc: "Visual clean com detalhes prateados.", price: 19.90, icon: "gun", badge: null },
      { name: "Pistol AP — Camuflado RJ", desc: "Camuflagem inspirada na Cidade Maravilhosa.", price: 22.90, icon: "gun", badge: {text:"NOVO", cls:"badge-amber"} },
      { name: "Rifle — Edição Cesarão", desc: "Skin de edição limitada com o emblema da cidade.", price: 39.90, icon: "gun", badge: {text:"LIMITADA", cls:"badge-gold"} },
      { name: "Shotgun — Bronze Envelhecido", desc: "Acabamento envelhecido, visual robusto.", price: 24.90, icon: "gun", badge: null }
    ],
    roupas: [
      { name: "Kit Patrulha", desc: "Conjunto completo estilo tático.", price: 17.90, icon: "shirt", badge: null },
      { name: "Colete Tático Cesarão", desc: "Colete com o emblema bordado da facção.", price: 21.90, icon: "shirt", badge: {text:"EXCLUSIVO", cls:"badge-gold"} },
      { name: "Boné Emblema Dourado", desc: "Réplica do brasão da cidade.", price: 9.90, icon: "shirt", badge: null },
      { name: "Corrente Cesarão Gold", desc: "Acessório de pescoço banhado a ouro.", price: 14.90, icon: "shirt", badge: null }
    ],
    casas: [
      { name: "Casa Alto da Serra", desc: "3 quartos, garagem para 4 veículos.", price: 129.90, icon: "house", badge: null },
      { name: "Cobertura Vista Cidade", desc: "Vista panorâmica e acabamento premium.", price: 219.90, icon: "house", badge: {text:"PREMIUM", cls:"badge-amber"} },
      { name: "Base Secreta", desc: "Esconderijo com cofre e garagem oculta.", price: 179.90, icon: "house", badge: {text:"EXCLUSIVA", cls:"badge-gold"} },
      { name: "Casa Popular Reformada", desc: "Opção em conta para começar bem.", price: 59.90, icon: "house", badge: {text:"ENTRADA", cls:"badge-olive"} }
    ],
    utilidades: [
      { name: "Token de Reset", desc: "Reseta atributos e progresso do personagem.", price: 12.90, icon: "tool", badge: null },
      { name: "Troca de Personagem", desc: "Altere aparência e nome do seu personagem.", price: 9.90, icon: "tool", badge: null },
      { name: "Renome de Facção", desc: "Troque o nome da sua gangue sem perder progresso.", price: 14.90, icon: "tool", badge: null },
      { name: "Pacote XP em Dobro — 7 dias", desc: "Evolua mais rápido durante uma semana.", price: 19.90, icon: "tool", badge: {text:"POPULAR", cls:"badge-gold"} }
    ],
    combos: [
      { name: "Combo Chegada", desc: "VIP Prata + Kit Patrulha + Token de Reset.", price: 59.90, icon: "combo", badge: {text:"ECONOMIZE", cls:"badge-olive"} },
      { name: "Combo Blindado + Skin", desc: "Sultan RS Blindado + Pistol .50 Ouro Cesarão.", price: 64.90, icon: "combo", badge: {text:"ECONOMIZE", cls:"badge-olive"} },
      { name: "Combo Facção Completa", desc: "VIP Ouro + Colete Tático + Corrente Gold.", price: 84.90, icon: "combo", badge: {text:"MAIS PROCURADO", cls:"badge-gold"} }
    ]
  };

  const testimonials = [
    { name: "Renan Costa", init: "RC", date: "07 de setembro de 2026", text: "Entrega automática, na hora. VIP Ouro compensa muito." },
    { name: "Bianca Alves", init: "BA", date: "06 de setembro de 2026", text: "Comprei o Kuruma blindado e chegou na garagem em segundos." },
    { name: "Vitor Andrade", init: "VA", date: "05 de setembro de 2026", text: "Suporte no Discord respondeu rápido quando tive dúvida." },
    { name: "Duda Ferreira", init: "DF", date: "05 de setembro de 2026", text: "As skins de arma com o emblema da cidade ficaram show." },
    { name: "Lucas Menezes", init: "LM", date: "04 de setembro de 2026", text: "Combo Chegada é ótimo pra quem tá começando na cidade." },
    { name: "Ana Paula", init: "AP", date: "03 de setembro de 2026", text: "Casa Alto da Serra tem um acabamento muito bom, recomendo." }
  ];

  function brl(v){ return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }

  function renderProducts(){
    Object.keys(products).forEach(cat => {
      const container = document.getElementById('grid-' + cat);
      container.innerHTML = products[cat].map(p => `
        <div class="card">
          <div class="card-media">
            ${p.badge ? `<span class="card-badge ${p.badge.cls}">${p.badge.text}</span>` : ''}
            ${icons[p.icon]}
          </div>
          <div class="card-body">
            <h3>${p.name}</h3>
            <p class="desc">${p.desc}</p>
            <div class="card-foot">
              <span class="price">${brl(p.price)}</span>
              <button class="add-btn" data-name="${p.name}" data-price="${p.price}">Adicionar</button>
            </div>
          </div>
        </div>
      `).join('');
    });
  }

  function renderTestimonials(){
    document.getElementById('testi-grid').innerHTML = testimonials.map(t => `
      <div class="testi-card">
        <div class="testi-top">
          <div class="avatar">${t.init}</div>
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-date">${t.date}</div>
          </div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="testi-text">${t.text}</p>
      </div>
    `).join('');
  }

  // cart
  let cart = [];
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const cartBtn = document.getElementById('cartBtn');
  const drawerClose = document.getElementById('drawerClose');
  const toast = document.getElementById('toast');

  function openDrawer(){ drawer.classList.add('show'); overlay.classList.add('show'); }
  function closeDrawer(){ drawer.classList.remove('show'); overlay.classList.remove('show'); }
  cartBtn.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function renderCart(){
    const itemsEl = document.getElementById('drawerItems');
    const countEl = document.getElementById('cartCount');
    const totalEl = document.getElementById('drawerTotal');
    countEl.textContent = cart.length;
    if(cart.length === 0){
      itemsEl.innerHTML = '<div class="drawer-empty">Seu carrinho está vazio.<br>Adicione produtos para continuar.</div>';
    } else {
      itemsEl.innerHTML = cart.map((item, i) => `
        <div class="drawer-item">
          <span class="di-name">${item.name}</span>
          <span class="di-price">${brl(item.price)}</span>
          <button class="di-remove" data-idx="${i}" aria-label="Remover">✕</button>
        </div>
      `).join('');
    }
    const total = cart.reduce((s, i) => s + i.price, 0);
    totalEl.textContent = brl(total);
  }

  document.addEventListener('click', (e) => {
    if(e.target.matches('.add-btn')){
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      cart.push({ name, price });
      renderCart();
      renderCheckout();
      showToast(name + ' adicionado ao carrinho');
    }
    if(e.target.matches('.di-remove')){
      const idx = parseInt(e.target.dataset.idx, 10);
      cart.splice(idx, 1);
      renderCart();
      renderCheckout();
    }
  });

  // ---------- checkout ----------
  const checkoutOverlay = document.getElementById('checkoutOverlay');
  const checkoutContent = document.getElementById('checkoutContent');
  const checkoutClose = document.getElementById('checkoutClose');
  const goCheckout = document.getElementById('goCheckout');

  const COUPONS = { CESARAO10: 0.10 };
  let appliedCoupon = null;

  function openCheckout(){
    closeDrawer();
    renderCheckout();
    checkoutOverlay.classList.add('show');
  }
  function closeCheckout(){ checkoutOverlay.classList.remove('show'); }
  goCheckout.addEventListener('click', openCheckout);
  checkoutClose.addEventListener('click', closeCheckout);
  checkoutOverlay.addEventListener('click', (e) => { if(e.target === checkoutOverlay) closeCheckout(); });

  function checkoutTotals(){
    const subtotal = cart.reduce((s, i) => s + i.price, 0);
    const discount = appliedCoupon ? subtotal * appliedCoupon.pct : 0;
    return { subtotal, discount, total: subtotal - discount };
  }

  function renderCheckout(){
    if(cart.length === 0){
      checkoutContent.innerHTML = `<div class="co-empty">Seu carrinho está vazio.<br>Adicione produtos para ir ao checkout.</div>`;
      return;
    }
    const { subtotal, discount, total } = checkoutTotals();
    checkoutContent.innerHTML = `
      <div class="checkout-body">
        <div>
          <div class="checkout-section-title">DADOS DO PEDIDO</div>
          <form id="checkoutForm">
            <div class="co-field">
              <label for="coName">Nome completo</label>
              <input id="coName" type="text" placeholder="Como podemos te chamar" required>
            </div>
            <div class="co-row">
              <div class="co-field">
                <label for="coDiscord">Usuário do Discord</label>
                <input id="coDiscord" type="text" placeholder="ex: cesar#0001" required>
              </div>
              <div class="co-field">
                <label for="coId">ID do personagem</label>
                <input id="coId" type="text" placeholder="ex: 4821" required>
              </div>
            </div>
            <div class="co-field">
              <label for="coEmail">E-mail</label>
              <input id="coEmail" type="email" placeholder="seuemail@exemplo.com" required>
            </div>

            <div class="checkout-section-title" style="margin-top:6px;">FORMA DE PAGAMENTO</div>
            <div class="pay-options">
              <label class="pay-opt"><input type="radio" name="pay" value="Pix" checked> Pix — aprovação na hora</label>
              <label class="pay-opt"><input type="radio" name="pay" value="Cartão"> Cartão de crédito</label>
              <label class="pay-opt"><input type="radio" name="pay" value="Mercado Pago"> Mercado Pago</label>
            </div>

            <button type="submit" class="btn btn-gold co-submit">Confirmar pedido — ${brl(total)}</button>
          </form>
        </div>

        <div>
          <div class="checkout-section-title">RESUMO</div>
          <div class="co-summary-items">
            ${cart.map(i => `<div class="co-summary-item"><span>${i.name}</span><span>${brl(i.price)}</span></div>`).join('')}
          </div>

          <div class="coupon-row">
            <input type="text" id="couponInput" placeholder="Cupom de desconto" value="${appliedCoupon ? appliedCoupon.code : ''}">
            <button type="button" id="couponBtn">Aplicar</button>
          </div>
          <div class="coupon-msg" id="couponMsg"></div>

          <div class="co-totals">
            <div class="co-totals-row"><span>Subtotal</span><span>${brl(subtotal)}</span></div>
            ${appliedCoupon ? `<div class="co-totals-row"><span class="discount">Cupom ${appliedCoupon.code}</span><span class="discount">-${brl(discount)}</span></div>` : ''}
            <div class="co-totals-row grand"><span>Total</span><b>${brl(total)}</b></div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('couponBtn').addEventListener('click', () => {
      const raw = document.getElementById('couponInput').value.trim().toUpperCase();
      const msg = document.getElementById('couponMsg');
      if(!raw){ return; }
      if(COUPONS[raw]){
        appliedCoupon = { code: raw, pct: COUPONS[raw] };
        msg.textContent = 'Cupom aplicado! ' + Math.round(COUPONS[raw]*100) + '% de desconto.';
        msg.className = 'coupon-msg ok';
      } else {
        appliedCoupon = null;
        msg.textContent = 'Cupom inválido.';
        msg.className = 'coupon-msg err';
      }
      renderCheckout();
    });

    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const { total } = checkoutTotals();
      const payMethod = document.querySelector('input[name="pay"]:checked').value;
      checkoutContent.innerHTML = `
        <div class="co-success">
          <div class="check">✓</div>
          <h4>Pedido gerado!</h4>
          <p>Pagamento via ${payMethod} no valor de ${brl(total)}. Assim que for aprovado, os itens caem automaticamente no seu personagem.</p>
        </div>
      `;
      cart = [];
      appliedCoupon = null;
      renderCart();
      setTimeout(closeCheckout, 3200);
    });
  }

  // active pill on scroll
  const pills = document.querySelectorAll('.cat-pill');
  const sections = Array.from(pills).map(p => document.getElementById(p.dataset.cat));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        pills.forEach(p => p.classList.toggle('active', p.dataset.cat === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => s && io.observe(s));

  renderProducts();
  renderTestimonials();
  renderCart();