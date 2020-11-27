ExtensionLicenseExpiration=function(k){var n,t,i,r,s,a,e,d=function(e,n,t,i){var r=$(k.body),s="license_expiration_seen",a="license_expiration_upgrade",d="license_expiration_learn_more",o="license_expiration_dismiss",p,l=document.getElementById("notificationContainer"),g=LPTools.createElement("div"),m=LPTools.createElement("p"),c=LPTools.createElement("button"),S=LPTools.createElement("a");g.setAttribute("id","expirationTextContainer"),m.setAttribute("id","expirationText"),c.setAttribute("id","expirationUpgradeButton"),S.setAttribute("id","expirationLearnMore");var x=document.getElementById("panelContainer"),u=LPTools.createElement("h1"),L=LPTools.createElement("p"),E=LPTools.createElement("span"),T=LPTools.createElement("a"),v=LPTools.createElement("div","features"),b=LPTools.createElement("div","feature one"),P=LPTools.createElement("div","feature two"),f=LPTools.createElement("div","feature three"),h=LPTools.createElement("div","buttons"),C=LPTools.createElement("button","try-btn"),I=LPTools.createElement("button","no-thanks-btn"),y=function(){$("#notificationContainer").empty(),g.appendChild(m),g.appendChild(S),l.appendChild(g),l.appendChild(c)},_=function(){$("#panelContainer").empty(),L.appendChild(E),L.appendChild(T),v.appendChild(b),v.appendChild(P),v.appendChild(f),h.appendChild(C),h.appendChild(I),x.appendChild(u),x.appendChild(L),x.appendChild(v),x.appendChild(h)};switch(e){case"Enterprise Admin":void 0!==t&&t<1?(_(),p=("trial"===n?(u.innerText=Strings.translateString("Your LastPass Enterprise trial expired."),E.innerText=Strings.translateString("Upgrade now to avoid losing LastPass Enterprise features."),C.innerText=Strings.translateString("Upgrade to LastPass Enterprise"),T.innerText=Strings.translateString("Learn More")):(u.innerText=Strings.translateString("Your Enterprise License has expired."),E.innerText=Strings.translateString("Renew now to avoid losing LastPass Enterprise features."),T.innerText=Strings.translateString("Learn More"),C.innerText=Strings.translateString("Renew LastPass Enterprise")),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Federated Login with AD Sync"),P.innerText=Strings.translateString("SAML Single Sign-On"),f.innerText=Strings.translateString("Advanced Reporting"),"dismissedEnterpriseExpired"),r.addClass("panelIsActive licenseExpired"),x.classList.add("enterpriseExpired"),bg.sendLpImprove(s),C.addEventListener("click",function(){bg.sendLpImprove(a),bg.openenterprisepayment()}),T.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}),I.addEventListener("click",function(){bg.sendLpImprove(o),r.removeClass("panelIsActive licenseExpired"),ExtensionDropdown.setSize(),w(p,1)})):(void 0!==t&&t<=30&&1!==i?(y(),m.innerText=Strings.translateString("Your LastPass Enterprise license expires in %d days.",t),c.innerText=Strings.translateString("Renew"),S.innerText=Strings.translateString("Learn More"),r.addClass("expirationSet"),bg.sendLpImprove(s)):(y(),m.innerText=Strings.translateString("Your LastPass Enterprise trial expires in %d days.",t),c.innerText=Strings.translateString("Upgrade"),S.innerText=Strings.translateString("Learn More"),bg.sendLpImprove(s),r.addClass("expirationSet")),c.addEventListener("click",function(){bg.sendLpImprove(a),bg.openenterprisepayment()}),S.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}));break;case"Teams Admin":void 0!==t&&t<1?(_(),p=("trial"===n?(u.innerText=Strings.translateString("Your Teams License has expired."),E.innerText=Strings.translateString("Upgrade now to avoid losing LastPass Teams features."),C.innerText=Strings.translateString("Upgrade to LastPass Teams")):(u.innerText=Strings.translateString("Your Teams License has expired."),E.innerText=Strings.translateString("Renew now to avoid losing LastPass Teams features."),C.innerText=Strings.translateString("Renew LastPass Teams")),T.innerText=Strings.translateString("Learn More"),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Admin Console"),P.innerText=Strings.translateString("User Management"),f.innerText=Strings.translateString("Increased Security Policies"),"dismissedTeamsExpired"),r.addClass("panelIsActive licenseExpired"),x.classList.add("teamsExpired"),bg.sendLpImprove(s),C.addEventListener("click",function(){bg.sendLpImprove(a),bg.openteamspayment()}),T.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}),I.addEventListener("click",function(){bg.sendLpImprove(o),r.removeClass("panelIsActive licenseExpired"),ExtensionDropdown.setSize(),w(p,1)})):(void 0!==t&&t<=30&&1!==i?(y(),m.innerText=Strings.translateString("Your LastPass Teams license expires in %d days.",t),c.innerText=Strings.translateString("Renew"),S.innerText=Strings.translateString("Learn More"),r.addClass("expirationSet"),bg.sendLpImprove(s),c.addEventListener("click",function(){bg.sendLpImprove(a),bg.openenterprisepayment()})):(y(),m.innerText=Strings.translateString("Your LastPass Teams trial expires in %d days.",t),c.innerText=Strings.translateString("Upgrade"),S.innerText=Strings.translateString("Learn More"),r.addClass("expirationSet"),bg.sendLpImprove(s),c.addEventListener("click",function(){bg.sendLpImprove(a),bg.openteamspayment()})),S.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}));break;case"Family Admin":void 0!==t&&t<1?(_(),"trial"===n?(u.innerText=Strings.translateString("Your LastPass Families trial expired."),E.innerText=Strings.translateString("Upgrade now to avoid losing LastPass Families features."),C.innerText=Strings.translateString("Upgrade to LastPass Families"),T.innerText=Strings.translateString("Learn More"),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Six Premium Licenses"),P.innerText=Strings.translateString("Family Manager Dashboard"),f.innerText=Strings.translateString("Unlimited Shared Folders"),p="dismissedFamiliesExpired"):void 0!==t&&t<1&&1!==i&&(u.innerText=Strings.translateString("Your Families License has expired."),E.innerText=Strings.translateString("Renew now to avoid losing LastPass Families features."),C.innerText=Strings.translateString("Renew LastPass Families"),T.innerText=Strings.translateString("Learn More"),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Six Premium Licenses"),P.innerText=Strings.translateString("Family Manager Dashboard"),f.innerText=Strings.translateString("Unlimited Shared Folders"),a="license_expired_upgrade_families",d="license_expired_learn_more_families",o="license_expired_dismiss_families",p="dismissedFamiliesExpired",s="license_expired_seen_families"),r.addClass("panelIsActive licenseExpired"),x.classList.add("familiesExpired"),bg.sendLpImprove(s),C.addEventListener("click",function(){bg.sendLpImprove(a),bg.openfamiliespayment()}),T.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}),I.addEventListener("click",function(){bg.sendLpImprove(o),r.removeClass("panelIsActive licenseExpired"),ExtensionDropdown.setSize(),w(p,1)})):(y(),m.innerText=Strings.translateString("Your LastPass Families trial expires in %d days.",t),c.innerText=Strings.translateString("Upgrade"),S.innerText=Strings.translateString("Learn More"),r.addClass("expirationSet"),bg.sendLpImprove(s),c.addEventListener("click",function(){bg.sendLpImprove(a),bg.openfamiliespayment()}),S.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}));break;case"Premium Trial User":void 0!==t&&t<1?(_(),u.innerText=Strings.translateString("Your LastPass Premium trial expired."),E.innerText=Strings.translateString("Upgrade now to avoid losing LastPass Premium features."),C.innerText=Strings.translateString("Upgrade to LastPass Premium"),T.innerText=Strings.translateString("Learn More"),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Unlimited 1:1 Password Sharing"),P.innerText=Strings.translateString("Emergency Access"),f.innerText=Strings.translateString("Two-Factor Authentication"),p="dismissedPremiumTrialExpired",r.addClass("panelIsActive licenseExpired"),x.classList.add("premiumExpired"),bg.sendLpImprove(s),C.addEventListener("click",function(){bg.sendLpImprove(a),bg.openpremium()}),T.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}),I.addEventListener("click",function(){bg.sendLpImprove(o),r.removeClass("panelIsActive licenseExpired"),ExtensionDropdown.setSize(),w(p,1)})):(y(),m.innerText=Strings.translateString("Your LastPass Premium trial expires in %d days.",t),c.innerText=Strings.translateString("Upgrade"),S.innerText=Strings.translateString("Learn More"),r.addClass("expirationSet"),bg.sendLpImprove(s),c.addEventListener("click",function(){bg.sendLpImprove(a),bg.openpremium()}),S.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}));break;case"Free User":void 0!==t&&-30<=t&&(_(),u.innerText=Strings.translateString("Your LastPass Premium trial expired."),E.innerText=Strings.translateString("Upgrade now to avoid losing LastPass Premium features."),C.innerText=Strings.translateString("Upgrade to LastPass Premium"),T.innerText=Strings.translateString("Learn More"),I.innerText=Strings.translateString("No Thanks"),b.innerText=Strings.translateString("Unlimited 1:1 Password Sharing"),P.innerText=Strings.translateString("Emergency Access"),f.innerText=Strings.translateString("Two-Factor Authentication"),p="dismissedPremiumTrialExpired",r.addClass("panelIsActive licenseExpired"),x.classList.add("premiumExpired"),bg.sendLpImprove(s),C.addEventListener("click",function(){bg.sendLpImprove(a),bg.openpremium()}),T.addEventListener("click",function(){bg.sendLpImprove(d),bg.openpricing()}),I.addEventListener("click",function(){bg.sendLpImprove(o),r.removeClass("panelIsActive licenseExpired"),ExtensionDropdown.setSize(),w(p,1)}))}ExtensionDropdown.setSize()},w=function(e,n){var t=JSON.parse(localStorage.getItem("expiredData"));null===t?(t={})[e]=n:t[e]=n,localStorage.setItem("expiredData",JSON.stringify(t))},o,p,l,g,m,c,S,x,u,L;return{initialize:function(){var e;n=bg.get("LPContentScriptFeatures").license_expiration,t=LPProxy.getAccountClass(),i=bg.get("g_premium_trial_exp_days"),r=bg.get("g_company_trial_exp_days"),s=bg.get("g_company_license_exp_days"),a=bg.get("g_company_renewalstatus"),360<s&&(null!==JSON.parse(localStorage.getItem("expiredData"))&&localStorage.removeItem("expiredData"))},showExpiration:d,getStoredExpPrefs:function(e,n,t,i){var r=JSON.parse(localStorage.getItem("expiredData"));return null!==r&&(1===r[e]||1===r[n]||1===r[t]||1===r[i])},premiumTrialExpiringStatusChecker:function(){return n&&null!==i&&i<=7&&1<=i&&"Premium Trial User"===t},premiumTrialExpiredStatusChecker:function(){return n&&null!==i&&i<1&&-31<i&&("Premium Trial User"===t||"Free User"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedPremiumTrialExpired")},companyTrialExpiringStatusChecker:function(){return n&&null!==r&&r<=7&&1<=r},companyTrialExpiredStatusChecker:function(){return n&&null!==r&&r<1&&("Enterprise Admin"===t||"Teams Admin"===t||"Family Admin"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired","dismissedTeamsExpired","dismissedFamiliesExpired")},companyLicenseExpiredStatusChecker:function(){return n&&null!==s&&s<1&&("Enterprise Admin"===t||"Teams Admin"===t||"Family Admin"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired","dismissedTeamsExpired","dismissedFamiliesExpired")},companyLicenseExpiringStatusChecker:function(){return n&&null!==s&&s<=30&&1!==a&&("Enterprise Admin"===t||"Teams Admin"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired","dismissedTeamsExpired","dismissedFamiliesExpired")},expiredCompanyStatusCheckerForPanelSize:function(){return n&&(null!==s&&s<1||null!==r&&r<1)&&("Enterprise Admin"===t||"Teams Admin"===t||"Family Admin"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired","dismissedTeamsExpired","dismissedFamiliesExpired")},expiredPremiumStatusCheckerForPanelSize:function(){return n&&null!==i&&i<1&&("Premium Trial User"===t||"Free User"===t)&&!ExtensionLicenseExpiration.getStoredExpPrefs("dismissedPremiumTrialExpired")},showExpiredSubscriptionMessaging:function(){var e=bg.get_show_expired_subscription_messaging();if(void 0===e.daysLeft)return!1;var n=$(k.body),t="license_expiration_seen",i="license_expiration_upgrade",r=LPTools.createElement("div"),s=LPTools.createElement("p"),a=LPTools.createElement("button");r.setAttribute("id","expirationTextContainer"),s.setAttribute("id","expirationText"),a.setAttribute("id","expirationUpgradeButton");var d=document.getElementById("panelContainer"),o=LPTools.createElement("h1","expired-flow"),p=LPTools.createElement("p"),l=LPTools.createElement("span"),g=LPTools.createElement("div","features"),m=LPTools.createElement("div","feature one"),c=LPTools.createElement("div","feature two"),S=LPTools.createElement("div","feature three"),x=LPTools.createElement("div","buttons expired-flow"),u=LPTools.createElement("button","try-btn renew-btn");return $("#panelContainer").empty(),p.appendChild(l),g.appendChild(m),g.appendChild(c),g.appendChild(S),x.appendChild(u),d.appendChild(o),d.appendChild(p),d.appendChild(g),d.appendChild(x),m.innerText=Strings.translateString("Shared folders"),c.innerText=Strings.translateString("Single sign-on"),S.innerText=Strings.translateString("Enterprise admin console"),u.innerText=Strings.translateString("Renew"),o.innerText=Strings.translateString("Your LastPass Enterprise subscription has expired."),0===e.daysLeft?l.innerText=Strings.translateString("Renew now to leverage the full power of LastPass Enterprise, including shared folders and more."):1===e.daysLeft?l.innerText=Strings.translateString("Renew today to retain access to shared folders and other LastPass Enterprise features."):l.innerText=Strings.translateString("Renew within %d days to retain access to shared folders and other LastPass Enterprise features.",e.daysLeft),n.addClass("panelIsActive licenseExpired"),d.classList.add("enterpriseExpired"),bg.sendLpImprove(t),u.addEventListener("click",function(){bg.sendLpImprove(i),bg.openenterprisepayment()}),!0}}}(document);