function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP Get Request
easyHTTP.prototype.get = function (url, callbalck) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callbalck(null, self.http.responseText);
    } else {
      callbalck('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

//Make an HTTP Post Request
easyHTTP.prototype.post = function (url, data, callbalck) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callbalck(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

//Make an HTTP Put Request
easyHTTP.prototype.put = function (url, data, callbalck) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callbalck(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

//Make an HTTP Delete Request
easyHTTP.prototype.delete = function (url, callbalck) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callbalck(null, 'Post Deleted');
    } else {
      callbalck('Error: ' + self.http.status);
    }
  }

  this.http.send();
}