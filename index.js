(function myBlog()){

	document.addEventListener("DOMContentLoaded", function(event)){


	var app = {
			DOMapi: domApiFunc(),
			DataApi: dataApiFunc(),
			addSections: addSectionsFunc,
			updateArticle: updateArticleFunc,
			mainSectionContainer: null,
			sections: null,
			init:init
		}
		app.init();

		function init(){
			this.addMenu();

			this.addSections();
		};

		function addMenuFunc(){
			function constructMenu(){
				var container = this.DOMapi.getConteiner("main-nav");
				var newNav = document.createElement("nav");
				var newList = document.createElement("ul");
				newNav.appendChild(newList);
				container.appendChild(newNav);
				function addItems(item, index){
					var index = index + 1;
					newList.innerHTML += "<li>" + (item.title + " " + index) +"</li>";
		}

			this.DOMapi.addItems(this.menu, addList)
			}

			function assMenuToDom(obj){
				this.sections = obj.data.sections;
				this.menu = obj.data.menu;
				constructMenu.call(this);

			}

			this.DataApi.getData(addMenuToDom.bind(this));


		};

		

		function addSectionsFunc(){
				this.mainconteiner = this.myDOMapi.getSectionsConteiner('main-sections-conteiner');
				var sections = this.myDOMapi.getSections('.section');
				for(var i = 0; i < sections.length; i++){
					var els = sections[i].children[3].getElementsByTagName('p');
					for(var x = 0; x < els.length; x++){
						els[x].textContent = "lorem";
					};

				};
		};
		function domApiFunc(){
			function getSectionsConteiner(id){
				return document.getElementById(id);
			}
			function addItems(items, callback){


			}
			var publicAPI = {
				getSections: getSections
			}
			return publicAPI;

		};
		$("main-container").animate({}, function(){

			$(this).animate({}, function(){
				$(this).animate({}, function(){
					$(this).animate({}, function(){

					})
				})
			})
		});

		

		//$("#main-container").text('new string');
		})();
