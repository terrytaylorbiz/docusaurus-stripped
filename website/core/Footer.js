/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">

   
          <div>
            <h5>Doc overview</h5>
            <a href={this.docUrl('overview.html')}>Overview</a>

          </div>
          <div>
            <h5>Community</h5>

            <a href={this.props.config.baseUrl + 'contact-us.html'}>Contact Us</a>
          </div>
          <div>
            <h5>Development (terry github... change this)</h5>
            <a href="https://github.com/terrytaylorbiz">GitHub</a>

          </div>
        </section>

      </footer>
    );
  }
}

module.exports = Footer;
