(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(26)},20:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(13),s=t.n(r),o=(t(20),t(2)),l=t(3),c=t(5),m=t(4),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},i.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},i.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),i.a.createElement("span",{className:"d-none d-lg-block"})),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")))))}}]),t}(n.Component),u=t(7),p=t(10),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,i.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),i.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",i.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),i.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{href:this.landingData.linkedin},i.a.createElement(u.a,{icon:p.b})),i.a.createElement("a",{href:this.landingData.github},i.a.createElement(u.a,{icon:p.a})))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.position),i.a.createElement("div",{className:"subheading mb-3"},e.organization),i.a.createElement("p",null,e.aboutWork)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.university),i.a.createElement("div",{className:"subheading mb-3"},e.degree),i.a.createElement("p",null,e.gpa)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),t}(n.Component),b=t(14),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Skills"),i.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),i.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return i.a.createElement("div",{key:a,className:"col-6"},i.a.createElement("p",{className:"list-item"},i.a.createElement(u.a,{icon:b.a,color:"green"}),i.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Interests"),i.a.createElement("p",null,this.interests.paragraphOne),i.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),y=t(6),N=t(11),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={landingData:y.landing,experience:y.experience,education:y.education,skills:y.skills,interests:y.interests},N.a.initialize("UA-158818625-1"),N.a.pageview(window.location.pathname),n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{sidebarData:this.state.landingData}),i.a.createElement("div",{className:"container-fluid p-0"},i.a.createElement(g,{landingData:this.state.landingData}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(h,{experience:this.state.experience}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(f,{education:this.state.education}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(v,{skills:this.state.skills}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(E,{interests:this.state.interests}),i.a.createElement("hr",{className:"m-0"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},6:function(e){e.exports={landing:{firstName:"Marcello   ",lastName:"De Filippis",phoneNumber:"(416)-988-3973",bio:"Breaking into the field of Data Science, Analytics, Web Development, and Coding. Living In Hamilton, Ontario.",email:"defilipm@mcmaster.ca",linkedin:"https://www.linkedin.com/in/marcellodefilippis/",github:"https://github.com/MarcelloDe"},experience:[{position:"Head of Supportive Relations",organization:" DeltaHacks",aboutWork:"Managed a team of three to facilitate and coordinate the recruitment of mentors, judges, workshop hosts, and challenge hosts for a 36-hour hackathon event attended by 600+ participants over the span of 7-months.",fromDate:"June 2021",toDate:"January 2022"},{position:"Data Analyst",organization:"McMaster University",aboutWork:"Analyzed course evaluation trends among 12 separate departments over a 6-year span and created accompanying graphs and dashboards for each report.",fromDate:"November 2020",toDate:"August 2021"},{position:"Administrative Assistant",organization:"The Career Foundation",aboutWork:"A workforce planning initiative funded by Skills Advance Ontario (SAO) pilot project called 'The Cannabis Production Worker Training & Recruitment Program'.",fromDate:"July 2020",toDate:"September 2020"},{position:"Associate Freelance Photographer",organization:"Chasing Moments Photography",aboutWork:"providing on-site photography coverage of special events. Content creation using social media platforms and Adobe products.",fromDate:"May 2019",toDate:"Present"},{position:"Inventory Clerk",organization:"Peel Regional Police",aboutWork:"Responsible for performing a variety of data entry, clerical and administrative functions for maintanence and management of inventory",fromDate:"May 2018",toDate:"August 2018"},{position:"Customer Service Representative",organization:"Scotiabank",aboutWork:"Responsible for the day-to-day face-to-face transactions for walk-in customers. Transactions such as  mortgage payments, foreign currency exchange, deposits and withdrawals. Furthermore, as the head teller I performed light accounting procedures  such as the recording and balancing the transfer of funds between vault and tills. ",fromDate:"June 2017",toDate:"April 2018"},{position:"Information Clerk",organization:"Peel Regional Police",aboutWork:"Analyzed and organized confidential files to contribute to a department wide process of moving towards an electronic based filing system while coordinating among colleagues with Microsoft SharePoint",fromDate:"June 2016",toDate:"September 2016"},{position:"Sale Representative",organization:"LCBO",aboutWork:"Assisted in shipping and receiving, ordering, and stocking functions with the use of inventory management-based technology. Also, provided  customer service by advising potential clients on which wine to buy based on varietal, price, pairing, and geographic origin. ",fromDate:"2012",toDate:"2015"}],education:[{university:"Mohawk College",degree:"Software Development",gpa:"This hands-on program covers key topics including a variety of programming languages, web application development, mobile application development, systems analysis, database design, quality assurance testing, and technical writing, .",fromDate:"2022",toDate:"present"},{university:"Sheridan College",degree:"Data Science Certificate",gpa:"Executed the analytics process of data cleaning, processing, predicting, and applying business intelligence practices of visualization and report writing. Applied knowledge of predictive analytics, database management, machine learning, and advanced statistics",fromDate:"2018",toDate:"2020"},{university:"IBM/Coursera Online",degree:"IBM Data Science Professional Certificate",gpa:" Certification included completion of nine Courses such as: python for Data Science and AI, Machine Learning, Databases and SQL, as well as a final capstone project",fromDate:"2020",toDate:"2020"},{university:"Mohawk College 'City School'",degree:"Coding Boot Camp",gpa:" 12 week intensive bootcamp. I learned about the basics of web development including HTML, CSS, Javascript, jQuery, and SQL.",fromDate:"September 2019",toDate:"December 2019"},{university:"York University",degree:"Human Rights and Equity Studies",gpa:"Bachelor\u2019s Degree with Honours whereby I\u2019ve studied and applied: public policy, Charter of Rights and Freedoms, Criminal Code of Canada, as well as the ability to interpret case law and apply the rule of precedence.",fromDate:"2014",toDate:"2017"},{university:"York University",degree:"Human Resources Management Professional Certificate",gpa:"Studied and applied the principles of accounting, occupational health and safety management systems, the process of recruitment, labour relations, performance appraisals, human resources planning, and business administration.",fromDate:"2014",toDate:"2017"}],skills:[{name:"Over 5 years of administrative experience"},{name:"r"},{name:"Database Management using SQL"},{name:"Python"},{name:"HTML, CSS, Javascript"},{name:"IBM Watson"},{name:"Tableau and Power B.I"},{name:"Scrum Fundamentals Certified"}],interests:{paragraphOne:"I am currently learning how web-development and am working on a blog that will contain my personal projects and blog.",paragraphTwo:"Feel free to reach out to me at anytime if you'd like to connect. Add me on LinkedIn also!"}}}},[[15,1,2]]]);
//# sourceMappingURL=main.1f3d6b62.chunk.js.map