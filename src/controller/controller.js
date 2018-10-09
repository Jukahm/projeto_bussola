class Controller {

    static getCredentials() {
        try {
            let client_id = '82c5eb95b2614af086a5129ab6176fe6';
            let redirect_uri = 'http://localhost:3000/busca/';
            let url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            window.location = url;
            

        } catch (error) {
            console.error(error);
        }
    }

    static getToken() {
        let url = new URLSearchParams(window.location.hash.substring(1));
        let token = url.get("access_token");
        return token; 
    }

    static getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
            // eslint-disable-next-line
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }
}

export default Controller;