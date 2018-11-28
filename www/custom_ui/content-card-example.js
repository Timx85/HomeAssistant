class ContentCardExample extends HTMLElement {
    set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        this.content = document.createElement('div');
        this.content.style.padding = '16px 16px 16px';
        card.appendChild(this.content);
        this.appendChild(card);
      }
      const entities = this.config.entities;
  
      var innerHTML = "";
      entities.forEach( function(entityId) {
        const state = hass.states[entityId];
        const stateStr = state ? state.state : 'unavailable';
        var entityName = entityId.substr(7);
  
          if(stateStr == "home"){
            innerHTML += 'The state of '+entityId+' is '+stateStr+'!' + 
            '<br><br>' +
            '<img src="/local/TST/PhoneState/'+entityName+'_kleur.jpg" width="50"; height="50";  style="padding-right:15px"><br>';
          }else{
            innerHTML += 'The state of '+entityId+' is '+stateStr+'!' +
                '<br><br>' + 
                '<img src="/local/TST/PhoneState/'+entityName+'_zwart.jpg" width="50"; height="50";><br>';
          }
      });
      this.content.innerHTML = innerHTML;
    }
  
    setConfig(config) {
      if (!config.entities) {
        throw new Error('You need to definee an entity');
      }
      this.config = config;
    }
    getCardSize() {
      return 1;
    }
  }
  customElements.define('content-card-example', ContentCardExample);