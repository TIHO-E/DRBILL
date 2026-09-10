(function(){
  const FUNCTION_URL='https://fzuqhjxzczlyinilstkd.supabase.co/functions/v1/submit-enquiry';
  // Paste the Cloudflare Turnstile PUBLIC site key here after the widget is created.
  // Never put the Turnstile secret key in this file.
  const TURNSTILE_SITE_KEY='';
  const MAX_FILE_SIZE=10*1024*1024;
  const ALLOWED_TYPES=['image/jpeg','image/png','image/webp','image/heic','image/heif'];

  const form=document.getElementById('quoteForm');
  if(!form) return;
  const submit=document.getElementById('quoteSubmit');
  const submitLabel=document.getElementById('submitLabel');
  const message=document.getElementById('formMessage');
  const success=document.getElementById('formSuccess');
  const successTitle=document.getElementById('successTitle');
  const successText=document.getElementById('successText');
  const successRef=document.getElementById('successRef');
  const newEnquiry=document.getElementById('newEnquiry');
  const photo=document.getElementById('lawnPhoto');
  const securityStatus=document.getElementById('securityStatus');
  let turnstileToken='';
  let turnstileId=null;
  let submitting=false;

  function isChinese(){return document.documentElement.lang.toLowerCase().startsWith('zh');}
  function setMessage(text,type='error'){
    message.textContent=text||'';
    message.className='form-message'+(text?' '+type:'');
  }
  function setLoading(on){
    submitting=on;
    submit.disabled=on;
    submit.classList.toggle('is-loading',on);
    submitLabel.textContent=on?(isChinese()?'正在提交…':'Sending…'):(isChinese()?'获取免费报价':'Get My Free Quote');
  }
  function validatePhoto(){
    const file=photo.files&&photo.files[0];
    if(!file) return true;
    if(file.size>MAX_FILE_SIZE){setMessage(isChinese()?'照片不能超过 10 MB。':'The lawn photo must be 10 MB or smaller.');photo.value='';return false;}
    if(file.type&&!ALLOWED_TYPES.includes(file.type)){setMessage(isChinese()?'请上传 JPG、PNG、WebP 或 HEIC 图片。':'Please upload a JPG, PNG, WebP or HEIC image.');photo.value='';return false;}
    setMessage('');return true;
  }
  photo.addEventListener('change',validatePhoto);

  function renderTurnstile(){
    if(!TURNSTILE_SITE_KEY){
      securityStatus.textContent=isChinese()?'安全验证将在正式发布前启用。':'Security verification will be enabled before launch.';
      return;
    }
    if(!window.turnstile){setTimeout(renderTurnstile,250);return;}
    if(turnstileId!==null) return;
    turnstileId=window.turnstile.render('#turnstileWidget',{
      sitekey:TURNSTILE_SITE_KEY,
      theme:'light',
      callback:function(token){turnstileToken=token;securityStatus.textContent='';},
      'expired-callback':function(){turnstileToken='';},
      'error-callback':function(){turnstileToken='';securityStatus.textContent=isChinese()?'安全验证暂时无法加载，请刷新页面。':'Security check could not load. Please refresh the page.';}
    });
  }
  renderTurnstile();

  form.addEventListener('submit',async function(e){
    e.preventDefault();
    if(submitting) return;
    setMessage('');
    if(!form.checkValidity()){form.reportValidity();return;}
    if(form.elements.website&&form.elements.website.value) return;
    if(!validatePhoto()) return;
    if(TURNSTILE_SITE_KEY&&!turnstileToken){setMessage(isChinese()?'请先完成安全验证。':'Please complete the security check.');return;}

    const fd=new FormData(form);
    if(turnstileToken) fd.set('cf_turnstile_response',turnstileToken);
    setLoading(true);
    try{
      const response=await fetch(FUNCTION_URL,{method:'POST',body:fd,headers:{'Accept':'application/json'}});
      let data={};
      try{data=await response.json();}catch(_e){}
      if(!response.ok||data.success===false) throw new Error(data.error||data.message||'Request failed');
      form.hidden=true;
      success.hidden=false;
      successTitle.textContent=isChinese()?'谢谢，我们已经收到您的询价。':'Thank you — we’ve received your enquiry.';
      successText.textContent=isChinese()?'RoboGardener 会查看您的草坪资料，并尽快与您联系下一步。':'RoboGardener will review your lawn details and contact you about the next step.';
      successRef.textContent=data.enquiry_id?(isChinese()?'询价编号：':'Enquiry reference: ')+data.enquiry_id:'';
      success.focus({preventScroll:true});
      success.scrollIntoView({behavior:'smooth',block:'center'});
      form.reset();
      const preferred=document.getElementById('preferredLanguage');
      if(preferred) preferred.value=isChinese()?'Chinese':'English';
      turnstileToken='';
      if(window.turnstile&&turnstileId!==null) window.turnstile.reset(turnstileId);
    }catch(err){
      console.error('RoboGardener enquiry submission failed:',err);
      setMessage(isChinese()?'暂时无法提交。请稍后再试，或发送邮件至 enquiries@robogardener.com.au。':'We could not submit your enquiry right now. Please try again, or email enquiries@robogardener.com.au.');
      if(window.turnstile&&turnstileId!==null){turnstileToken='';window.turnstile.reset(turnstileId);}
    }finally{setLoading(false);}
  });

  newEnquiry.addEventListener('click',function(){
    success.hidden=true;form.hidden=false;setMessage('');form.scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
