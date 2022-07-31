"use strict";(self.webpackChunkconfs=self.webpackChunkconfs||[]).push([[140],{140:(v,l,r)=>{r.r(l),r.d(l,{SubscriptionModule:()=>x});var s=r(895),p=r(22),e=r(256),c=r(135),d=r(4);function f(t,n){return t.length>n?t.slice(0,n)+"...":t}function u(t){return{...t,nodeId:t.node_id,login:f(t.login,12),avatarUrl:t.avatar_url,gravatarId:t.gravatar_id,htmlUrl:t.html_url,followersUrl:t.followers_url,followingUrl:t.following_url,gistsUrl:t.gists_url,starredUrl:t.starred_url,subscriptionsUrl:t.subscriptions_url,organizationsUrl:t.organizations_url,reposUrl:t.repos_url,eventsUrl:t.events_url,receivedEventsUrl:t.received_events_url,siteAdmin:t.site_admin,twitterUsername:t.twitter_username,publicRepos:t.public_repos,publicGists:t.public_gists,createdAt:t.created_at,updatedAt:t.updated_at}}var C=r(859);let g=(()=>{class t{constructor(i){this._service=i,this._githubUser=new c.X(null),this.githubUser$=this._githubUser.asObservable()}loadGithubUser(i){this._service.getGithubUser(i).pipe((0,d.U)(u)).subscribe(a=>{this._githubUser.next(a)})}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(C.wP))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,n){if(1&t&&(e.ynx(0),e.O4$(),e.TgZ(1,"svg",1)(2,"g",2)(3,"g",3)(4,"g",4)(5,"mask",5),e._UZ(6,"rect",6)(7,"path",7),e.qZA(),e._UZ(8,"path",8)(9,"path",9),e.qZA(),e._UZ(10,"path",10),e.TgZ(11,"g",11)(12,"text",12)(13,"tspan",13),e._uU(14),e.qZA()()()(),e.TgZ(15,"g",14),e._UZ(16,"rect",15),e.TgZ(17,"g",16)(18,"text",17)(19,"tspan",18),e._uU(20,"de"),e.qZA(),e.TgZ(21,"tspan",19),e._uU(22,"de"),e.qZA()(),e.TgZ(23,"text",20),e._UZ(24,"tspan",21)(25,"tspan",22)(26,"tspan",23)(27,"tspan",24),e.qZA(),e.TgZ(28,"text",25)(29,"tspan",26),e._uU(30,"22"),e.qZA(),e.TgZ(31,"tspan",27),e._uU(32,"outubro"),e.qZA(),e.TgZ(33,"tspan",28),e._uU(34,"2022"),e.qZA()()()(),e.TgZ(35,"g",29)(36,"g",30)(37,"text",31)(38,"tspan",32),e._uU(39),e.qZA()(),e.TgZ(40,"g",33)(41,"g",34)(42,"text",35)(43,"tspan",36),e._uU(44,"github.com/"),e.qZA()(),e.TgZ(45,"text",37)(46,"tspan",38),e._uU(47),e.qZA()()(),e._UZ(48,"path",39),e.qZA()(),e.TgZ(49,"g",40),e._UZ(50,"rect",41),e.qZA()()(),e.TgZ(51,"defs")(52,"pattern",42),e._UZ(53,"use",43),e.qZA(),e.TgZ(54,"linearGradient",44),e._UZ(55,"stop",45)(56,"stop",46)(57,"stop",47),e.qZA(),e.TgZ(58,"linearGradient",48),e._UZ(59,"stop",49)(60,"stop",50),e.qZA(),e._UZ(61,"image",51),e.qZA()(),e.BQk()),2&t){const i=n.ngIf;e.xp6(14),e.hij("N\xba ",i.id,""),e.xp6(25),e.Oqu(i.name),e.xp6(8),e.Oqu(i.login),e.xp6(14),e.uIk("href",i.avatarUrl)}}const m=p.Bz.forChild([{path:":username",component:(()=>{class t{constructor(i,o){this.facade=o;const{username:a}=i.snapshot.params;o.loadGithubUser(a)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.gz),e.Y36(g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ticket"]],decls:2,vars:3,consts:[[4,"ngIf"],["width","666","height","363","viewBox","0 0 666 363","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","Ticket"],["id","ticket-container"],["id","border"],["id","path-1-outside-1_40_6300","maskUnits","userSpaceOnUse","x","0","y","0","width","666","height","363","fill","black"],["fill","white","width","666","height","363"],["fill-rule","evenodd","clip-rule","evenodd","d","M6 28C6 15.8497 15.8497 6 28 6H638C650.15 6 660 15.8497 660 28V132.741C640.661 140.482 627 159.396 627 181.5C627 203.604 640.661 222.518 660 230.259V335C660 347.15 650.15 357 638 357H28C15.8497 357 6 347.15 6 335V230.259C25.3394 222.518 39 203.604 39 181.5C39 159.396 25.3394 140.482 6 132.741V28Z"],["fill-rule","evenodd","clip-rule","evenodd","d","M6 28C6 15.8497 15.8497 6 28 6H638C650.15 6 660 15.8497 660 28V132.741C640.661 140.482 627 159.396 627 181.5C627 203.604 640.661 222.518 660 230.259V335C660 347.15 650.15 357 638 357H28C15.8497 357 6 347.15 6 335V230.259C25.3394 222.518 39 203.604 39 181.5C39 159.396 25.3394 140.482 6 132.741V28Z","fill","#212134"],["d","M660 132.741L662.23 138.311L666 136.802V132.741H660ZM660 230.259H666V226.198L662.23 224.689L660 230.259ZM6 230.259L3.77028 224.689L0 226.198V230.259H6ZM6 132.741H0V136.802L3.77029 138.311L6 132.741ZM28 0C12.536 0 0 12.536 0 28H12C12 19.1634 19.1634 12 28 12V0ZM638 0H28V12H638V0ZM666 28C666 12.536 653.464 0 638 0V12C646.837 12 654 19.1634 654 28H666ZM666 132.741V28H654V132.741H666ZM633 181.5C633 161.931 645.09 145.172 662.23 138.311L657.77 127.17C636.231 135.792 621 156.86 621 181.5H633ZM662.23 224.689C645.09 217.828 633 201.069 633 181.5H621C621 206.14 636.231 227.208 657.77 235.83L662.23 224.689ZM666 335V230.259H654V335H666ZM638 363C653.464 363 666 350.464 666 335H654C654 343.837 646.837 351 638 351V363ZM28 363H638V351H28V363ZM0 335C0 350.464 12.536 363 28 363V351C19.1634 351 12 343.837 12 335H0ZM0 230.259V335H12V230.259H0ZM33 181.5C33 201.069 20.9103 217.828 3.77028 224.689L8.22972 235.83C29.7685 227.208 45 206.14 45 181.5H33ZM3.77029 138.311C20.9103 145.172 33 161.931 33 181.5H45C45 156.86 29.7685 135.792 8.22971 127.17L3.77029 138.311ZM0 28V132.741H12V28H0Z","fill","url(#paint0_linear_40_6300)","mask","url(#path-1-outside-1_40_6300)"],["id","divider","d","M508 10.5V352","stroke","#4A4A6A","stroke-width","3","stroke-dasharray","6 6"],["id","Frame 48095615"],["id","number","transform","translate(598 43.5) rotate(90)","fill","white",0,"xml","space","preserve","font-family","Poppins","font-size","40","font-weight","bold","letter-spacing","0.105em",2,"white-space","pre"],["x","0.1586","y","44"],["id","event-container"],["id","logo","x","72","y","181","width","350","height","104","fill","none"],["id","date"],["fill","#7E7E97",0,"xml","space","preserve","font-family","Poppins","font-size","22","font-weight","600","letter-spacing","2px",2,"white-space","pre"],["x","141.101","y","309.2"],["x","291.556","y","309.2"],["fill","#C0C0CF",0,"xml","space","preserve","font-family","Poppins","font-size","22","font-weight","600","letter-spacing","2px",2,"white-space","pre"],["x","133.858","y","309.2"],["x","173.589","y","309.2"],["x","284.313","y","309.2"],["x","324.044","y","309.2"],["fill","white",0,"xml","space","preserve","font-family","Poppins","font-size","22","font-weight","600","letter-spacing","2px",2,"white-space","pre"],["x","104.593","y","309.2"],["x","180.831","y","309.2"],["x","331.286","y","309.2"],["id","member-container"],["id","identify"],["id","name","fill","white",0,"xml","space","preserve","font-family","Poppins","font-size","22","font-weight","600","letter-spacing","0em",2,"white-space","pre"],["x","187","y","80.2"],["id","github"],["id","github.com/pessoa"],["fill","#7E7E97",0,"xml","space","preserve","font-family","Poppins","font-size","20","letter-spacing","0em",2,"white-space","pre"],["x","223","y","122"],["fill","white",0,"xml","space","preserve","font-family","Poppins","font-size","20","letter-spacing","0em",2,"white-space","pre"],["x","347.082","y","122"],["id","Github","fill-rule","evenodd","clip-rule","evenodd","d","M198.999 103.5C192.373 103.5 187 108.894 187 115.548C187 120.87 190.438 125.386 195.207 126.979C195.807 127.09 196.026 126.718 196.026 126.399C196.026 126.113 196.016 125.355 196.01 124.35C192.671 125.078 191.967 122.735 191.967 122.735C191.422 121.343 190.635 120.973 190.635 120.973C189.546 120.225 190.718 120.24 190.718 120.24C191.921 120.325 192.555 121.482 192.555 121.482C193.626 123.323 195.364 122.791 196.048 122.482C196.157 121.704 196.467 121.173 196.81 120.872C194.145 120.568 191.344 119.535 191.344 114.918C191.344 113.603 191.811 112.527 192.579 111.685C192.456 111.38 192.044 110.156 192.696 108.497C192.696 108.497 193.704 108.173 195.996 109.732C196.954 109.464 197.98 109.331 199.001 109.326C200.02 109.331 201.047 109.464 202.005 109.732C204.296 108.173 205.302 108.497 205.302 108.497C205.956 110.156 205.544 111.38 205.421 111.685C206.19 112.527 206.655 113.603 206.655 114.918C206.655 119.546 203.849 120.565 201.176 120.863C201.606 121.235 201.99 121.97 201.99 123.094C201.99 124.704 201.975 126.003 201.975 126.399C201.975 126.721 202.191 127.096 202.8 126.978C207.565 125.381 211 120.869 211 115.548C211 108.894 205.627 103.5 198.999 103.5Z","fill","white"],["id","avatar"],["id","photo","x","80","y","46","width","92","height","92","rx","46","fill","url(#pattern0)","stroke","url(#paint1_linear_40_6300)","stroke-width","4"],["id","pattern0","patternContentUnits","objectBoundingBox","width","1","height","1"],["href","#image0_40_6300","transform","scale(0.002)"],["id","paint0_linear_40_6300","x1","583.5","y1","6.00001","x2","23.5","y2","217.5","gradientUnits","userSpaceOnUse"],["stop-color","#36CC69"],["offset","0.54634","stop-color","#4BFFB3"],["offset","1","stop-color","#2DC27A"],["id","paint1_linear_40_6300","x1","126","y1","46","x2","126","y2","138","gradientUnits","userSpaceOnUse"],["stop-color","#151524"],["offset","1","stop-color","#212134"],["id","image0_40_6300","data-name","image.png","width","500","height","500"]],template:function(i,o){1&i&&(e.YNc(0,h,62,4,"ng-container",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,o.facade.githubUser$))},dependencies:[s.O5,s.Ov],encapsulation:2}),t})()},{path:"",pathMatch:"full",redirectTo:"developerparana"}]);let x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,m]}),t})()}}]);