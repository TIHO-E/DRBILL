(function(){
  const translations = {
    en: {
      'nav.services':'Services','nav.why':'Why Us','nav.how':'How It Works','nav.commercial':'Commercial','nav.areas':'Areas','nav.quote':'Get a Quote','nav.cta':'Get a Free Quote',
      'hero.eyebrow':'SMART CARE • PERFECT LAWN','hero.title':'Smarter Lawn Care.<br><span>Powered by Robotics.</span><br>Perfected by Expertise.','hero.desc':'Professional robotic lawn mowing and expert lawn care for Melbourne homes and businesses — quieter, more consistent and managed by an experienced gardener.','hero.proof1':'✓ Smart robotic mowing','hero.proof2':'✓ Eco-friendly & low-noise','hero.proof3':'✓ Professional human oversight','hero.signature':'Science. Experience. Perfect Lawn.','hero.phd':'PhD in Horticulture','hero.exp':'18 Years Lawn-Care Experience',
      'form.kicker':'FREE LAWN ASSESSMENT','form.title':'Get Your Lawn-Care Quote','form.intro':'Tell us about your lawn. We’ll review the property and contact you with a tailored quote.','form.name':'Full Name *','form.namePh':'Your name','form.phone':'Phone *','form.phonePh':'04xx xxx xxx','form.email':'Email *','form.emailPh':'you@example.com','form.address':'Service Address *','form.addressPh':'Street address, suburb, VIC','form.postcode':'Postcode *','form.area':'Approx. Lawn Area *','form.height':'Current Grass Height *','form.service':'Service Required *','form.info':'Additional Information','form.infoPh':'Access, slope, pets, preferred timing, lawn condition, etc.','form.photos':'Upload Lawn Photos (optional)','form.submit':'Get My Free Quote','form.privacy':'🔒 Your details are used only to assess and respond to your enquiry.',
      'area.select':'Select lawn area','area.a1':'Under 100 m²','area.a2':'100–250 m²','area.a3':'250–500 m²','area.a4':'500–1,000 m²','area.a5':'1,000–2,000 m²','area.a6':'2,000 m²+','height.select':'Select grass height','height.h1':'Under 5 cm','height.h2':'5–10 cm','height.h3':'10–20 cm','height.h4':'20–40 cm','height.h5':'40 cm+ / overgrown','common.unsure':'Not sure','service.select':'Select service type','service.s1':'Robotic lawn mowing','service.s2':'Regular lawn maintenance','service.s3':'Edge trimming & detail work','service.s4':'Lawn health management','service.s5':'Custom lawn care plan','service.s6':'Commercial grounds maintenance',
      'estimate.label':'Indicative starting estimate','estimate.pending':'Complete lawn details to see an estimate','estimate.assess':'Assessment required — we’ll confirm after review','estimate.from':'From approximately','estimate.note':'Final pricing is confirmed after we review lawn condition, access, slope, service frequency and site requirements.',
      'steps.s1t':'Tell Us About Your Lawn','steps.s1d':'Share your address, lawn size, grass height and optional photos.','steps.s2t':'We Assess & Prepare a Quote','steps.s2d':'We review lawn condition, access and the right robotic + professional-care plan.','steps.s3t':'Enjoy a Better Lawn','steps.s3d':'Choose the right care plan and let us manage the mowing technology and lawn details.',
      'why.eyebrow':'WHY CHOOSE ROBOGARDENER?','why.title':'Technology + expertise =<br>the perfect lawn.','why.intro':'A smarter lawn-care service combining robotic mowing technology with Dr Bill’s horticultural knowledge and long-term lawn-care experience.','why.c1t':'Australia’s first lawn-mowing service company using robotic mowers','why.c1d':'A technology-led approach designed to make routine mowing quieter, more consistent and easier to manage.','why.c2t':'Australia’s first gardener with a PhD degree','why.c2d':'Science-led lawn care, practical horticultural knowledge and site-specific recommendations.','why.c3t':'18 years of lawn-mowing experience','why.c3d':'Professional, reliable and focused on long-term lawn presentation and health.',
      'services.eyebrow':'OUR SERVICES','services.title':'Smart care for a healthier, better-looking lawn.','services.s1t':'Robotic Lawn Mowing','services.s1d':'Automatic, efficient and precise mowing using professional robotic technology.','services.s2t':'Regular Lawn Maintenance','services.s2d':'Scheduled mowing and lawn care to keep presentation consistent throughout the season.','services.s3t':'Edge Trimming & Detail Work','services.s3d':'Professional finishing around paths, fences, borders and areas robots cannot reach.','services.s4t':'Lawn Health Management','services.s4d':'Practical care recommendations focused on lawn health, appearance and ongoing improvement.','services.s5t':'Custom Lawn Care Plans','services.s5d':'Tailored service plans based on lawn area, grass condition, mowing frequency and property needs.','services.s6t':'Commercial Grounds Care','services.s6d':'Robot-assisted lawn care for selected commercial, strata and facility sites.',
      'commercial.eyebrow':'RESIDENTIAL + COMMERCIAL','commercial.title':'Technology makes mowing smarter. Professional care makes lawns better.','commercial.desc':'For homes, larger properties, strata and body corporate sites, schools, childcare, retirement living, offices and facilities. We assess the lawn and recommend the right service approach.','commercial.cta':'Request a Site Assessment','commercial.i1':'Residential homes','commercial.i2':'Commercial properties','commercial.i3':'Strata & body corporate','commercial.i4':'Schools & childcare','commercial.i5':'Retirement living','commercial.i6':'Offices & facilities',
      'founder.eyebrow':'MEET DR BILL','founder.title':'Science. Experience. Perfect Lawn.','founder.p1':'RoboGardener combines horticultural knowledge with modern robotic mowing technology. The goal is simple: healthier lawns, less disruption and a more reliable maintenance experience.','founder.f1':'PhD in Horticulture','founder.f2':'18 years lawn-care experience','founder.f3':'Melbourne-based service',
      'areas.eyebrow':'SERVICE AREA','areas.title':'Servicing Melbourne & surrounding areas','areas.desc':'Send us your postcode, lawn area and current grass height. We’ll confirm availability and prepare a suitable quote.','areas.cta':'Check My Area',
      'footer.tagline':'Smart Lawn Care. A Greener Tomorrow.','footer.company':'Company','footer.contact':'Contact','footer.service':'Service','footer.melbourne':'Melbourne, Victoria','footer.quote':'Get a Free Quote'
    },
    zh: {
      'nav.services':'服务项目','nav.why':'为什么选择我们','nav.how':'服务流程','nav.commercial':'商业服务','nav.areas':'服务区域','nav.quote':'获取报价','nav.cta':'免费获取报价',
      'hero.eyebrow':'智能科技 • 完美草坪','hero.title':'更智能的草坪养护。<br><span>机器人高效割草。</span><br>专业经验把控细节。','hero.desc':'为墨尔本住宅及商业客户提供机器人割草与专业草坪养护服务——更安静、更稳定，并由经验丰富的 Gardener 全程管理。','hero.proof1':'✓ 智能机器人割草','hero.proof2':'✓ 环保安静、低噪音','hero.proof3':'✓ 专业人工监督与细节处理','hero.signature':'科技 + 专业 = 完美草坪','hero.phd':'园艺学博士','hero.exp':'18 年草坪养护经验',
      'form.kicker':'免费草坪评估','form.title':'获取您的草坪养护报价','form.intro':'填写您的草坪信息，我们会评估现场情况并为您提供针对性的报价。','form.name':'姓名 *','form.namePh':'请输入姓名','form.phone':'电话 *','form.phonePh':'04xx xxx xxx','form.email':'邮箱 *','form.emailPh':'you@example.com','form.address':'服务地址 *','form.addressPh':'街道地址、Suburb、VIC','form.postcode':'邮编 *','form.area':'草坪面积 *','form.height':'当前草高 *','form.service':'所需服务 *','form.info':'补充信息','form.infoPh':'例如出入口、坡度、宠物、希望服务时间、草坪状态等','form.photos':'上传草坪照片（可选）','form.submit':'获取免费报价','form.privacy':'🔒 您的信息仅用于评估并回复本次问询。',
      'area.select':'请选择草坪面积','area.a1':'100㎡以下','area.a2':'100–250㎡','area.a3':'250–500㎡','area.a4':'500–1,000㎡','area.a5':'1,000–2,000㎡','area.a6':'2,000㎡以上','height.select':'请选择当前草高','height.h1':'5cm 以下','height.h2':'5–10cm','height.h3':'10–20cm','height.h4':'20–40cm','height.h5':'40cm以上 / 明显过长','common.unsure':'不确定','service.select':'请选择服务类型','service.s1':'智能机器人割草','service.s2':'定期草坪维护','service.s3':'边缘修剪与细节处理','service.s4':'草坪健康管理','service.s5':'量身定制草坪护理方案','service.s6':'商业场地草坪维护',
      'estimate.label':'参考起步报价','estimate.pending':'填写草坪面积与草高后查看参考价格','estimate.assess':'需要人工评估 — 我们查看资料后确认','estimate.from':'参考约','estimate.note':'最终价格需结合草坪状态、出入口、坡度、服务频率及现场要求确认。',
      'steps.s1t':'告诉我们您的草坪情况','steps.s1d':'填写地址、草坪面积、草高，并可选择上传照片。','steps.s2t':'我们评估并准备报价','steps.s2d':'我们会查看草坪状态、出入口，并确定适合的机器人 + 专业人工养护方案。','steps.s3t':'享受更好的草坪','steps.s3d':'选择合适的服务方案，割草设备和细节维护由我们负责。',
      'why.eyebrow':'为什么选择 ROBOGARDENER？','why.title':'科技 + 专业 =<br>完美草坪','why.intro':'将智能机器人割草技术与 Dr Bill 的园艺专业知识及长期草坪维护经验相结合，提供更现代、更稳定的草坪服务。','why.c1t':'澳洲首家以割草机器人提供草坪割草服务的公司','why.c1d':'用科技提升日常割草效率，让草坪维护更安静、更稳定、更容易管理。','why.c2t':'澳洲首位拥有博士学位的 Gardener','why.c2d':'以科学知识结合实际园艺经验，为不同场地提供更专业的草坪建议。','why.c3t':'18 年割草及草坪维护经验','why.c3d':'专业、可靠，注重草坪的长期外观与健康状态。',
      'services.eyebrow':'我们的服务','services.title':'智能护理，让草坪更健康、更漂亮。','services.s1t':'智能机器人割草','services.s1d':'使用专业机器人技术自动规划、高效、精准完成草坪割草。','services.s2t':'定期草坪维护','services.s2d':'根据季节和草坪状态安排周期性割草与维护，让草坪保持整洁。','services.s3t':'边缘修剪与细节处理','services.s3d':'针对路径、围栏、花坛边缘及机器人难以覆盖的位置进行人工修整。','services.s4t':'草坪健康管理','services.s4d':'结合草坪状态提供实用养护建议，兼顾健康、外观与长期改善。','services.s5t':'量身定制草坪护理方案','services.s5d':'根据草坪面积、草高、维护频率和物业需求制定个性化服务计划。','services.s6t':'商业场地草坪维护','services.s6d':'为适合的商业物业、Strata 和 Facility 场地提供机器人辅助草坪维护。',
      'commercial.eyebrow':'住宅 + 商业客户','commercial.title':'科技让割草更智能，专业让草坪更完美。','commercial.desc':'适用于住宅、大型物业、Strata / Body Corporate、学校、Childcare、Retirement Living、办公室及设施场地。我们先评估草坪，再推荐合适的服务方式。','commercial.cta':'预约商业场地评估','commercial.i1':'住宅客户','commercial.i2':'商业物业','commercial.i3':'Strata / Body Corporate','commercial.i4':'学校与 Childcare','commercial.i5':'Retirement Living','commercial.i6':'办公室与设施场地',
      'founder.eyebrow':'认识 DR BILL','founder.title':'Science. Experience. Perfect Lawn.','founder.p1':'RoboGardener 将园艺专业知识与现代机器人割草技术相结合。目标很简单：让草坪更健康、减少噪音与干扰，并提供更可靠的日常维护体验。','founder.f1':'园艺学博士','founder.f2':'18 年草坪养护经验','founder.f3':'墨尔本本地服务',
      'areas.eyebrow':'服务区域','areas.title':'服务墨尔本及周边地区','areas.desc':'提交您的 Postcode、草坪面积与当前草高，我们会确认服务范围并准备适合的报价。','areas.cta':'查询我的区域',
      'footer.tagline':'智能草坪养护，更绿色的明天。','footer.company':'公司信息','footer.contact':'联系我们','footer.service':'服务地区','footer.melbourne':'墨尔本，维多利亚州','footer.quote':'免费获取报价'
    }
  };

  const area = document.getElementById('lawnArea');
  const height = document.getElementById('grassHeight');
  const price = document.getElementById('estimatePrice');
  const preferredLanguage = document.getElementById('preferredLanguage');
  let currentLang = localStorage.getItem('robogardener-lang') || 'en';

  const base = {'0-100':55,'100-250':75,'250-500':105,'500-1000':145,'1000-2000':210,'2000+':290};
  const multiplier = {'under5':1,'5-10':1.08,'10-20':1.22,'20-40':1.45,'40plus':1.8};

  function t(key){ return translations[currentLang][key] || translations.en[key] || key; }

  function applyLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('robogardener-lang', lang);
    if(preferredLanguage) preferredLanguage.value = lang === 'zh' ? 'Chinese' : 'English';

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateEstimate();
  }

  function updateEstimate(){
    if(!price) return;
    if(!area.value || !height.value){
      price.textContent = t('estimate.pending');
      return;
    }
    if(area.value === 'unknown' || height.value === 'unknown'){
      price.textContent = t('estimate.assess');
      return;
    }
    const raw = base[area.value] * multiplier[height.value];
    const rounded = Math.ceil(raw / 5) * 5;
    const upper = Math.ceil((rounded * 1.25) / 5) * 5;
    price.textContent = currentLang === 'zh' ? `${t('estimate.from')} $${rounded}–$${upper}` : `${t('estimate.from')} $${rounded}–$${upper}`;
  }

  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  area?.addEventListener('change', updateEstimate);
  height?.addEventListener('change', updateEstimate);
  applyLanguage(currentLang);
})();
