var template = Handlebars.templates["index"];
		var data = {};

		Handlebars.registerHelper("plan", function(plan, precio, color){
			var plan = Handlebars.Utils.escapeExpression(plan),
			var precio = Handlebars.Utils.escapeExpression(precio),
			var	color = Handlebars.Utils.escapeExpression(color),
			var plantilla = '<div class="col s3 col l3">' +
          '<div class="row color_titulo">{{{plan}}}</div>'+
          '<div class="row">'+
            '<div class="{{{color}}}">'+
              '<p class="align">${{{precio}}}/Month</p>'+
            '</div>'+
          '</div>'+
          '<div class="margn">'+
            '<div class="row">'+
              '<p class="inline">Lorem ipsum dolor</p><i class="material-icons">add</i>
            </div>'+
            '<div class="row">'+
              '<p class="inline">Lorem ipsum dolor</p><i class="material-icons">check</i>
            </div>'+
            '<div class="row">'+
              '<p class="inline">Lorem ipsum dolor</p><i class="material-icons">add</i>
            </div>'
            '<div class="row">
              <p class="inline">Lorem ipsum dolor</p><i class="material-icons">check</i>
            </div>'+
            '<div class="row">
              <p class="inline">Lorem ipsum dolor</p><i class="material-icons">add</i>
            </div>
            <div class="row">
              <p class="inline">Lorem ipsum dolor</p><i class="material-icons">check</i>
            </div>
          </div>
          <div class="row color_titulo">BUY NOW</div>
        </div>
      </div>
    </div>';

			return new Handlebars.SafeString(link);
		});
		//var compiladoHTML = compilar(data);
		document.getElementById("planes").innerHTML += template(data);