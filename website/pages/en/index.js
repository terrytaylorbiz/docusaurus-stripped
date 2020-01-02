/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src}/>
  </div>
);

const ProjectTitle = props => (
  <div>
    <h2 style={{fontFamily: 'Gugi'}} className="projectTitle">{siteConfig.title}</h2>
    <h2> {siteConfig.tagline}</h2>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle/>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const BlockNoPadding = props => (
  <Container
    padding={[]}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const Features = props => (
  <div>
    <Block background="light" layout="threeColumn">
      {[
        {
          content: '111111111111111',
          image: imgUrl('feeticon-90x90.png'),
          imageAlign: 'top',
          title: 'aaaaaaaaaaaaaaaaa',
        },
        {
          content: '222222222222222222',
          image: imgUrl('hearticon-90x90.png'),
          imageAlign: 'top',
          title: 'bbbbbbbbbbbbbbbbbbbbbb',
        },
        {
          content: '333333333333333333',
          image: imgUrl('roseicon-90x90.png'),
          imageAlign: 'top',
          title: 'cccccccccccccccccccc',
        },
      ]}
    </Block>
  </div>
);

const OPQFeatures = props => (
  <div className="productShowcaseSection paddingBottom">
    <h2 style={{ fontWeight: "bold" }}>Features</h2>
    <BlockNoPadding layout="threeColumn">
      {[
        {
          title: 'xxxxxxxxxxx',
          content: 'asdf asdfdasfadsf asdfadsf adfasdfdfs.',
        },
        {
          title: 'yyyyyyyyyyyyyy',
          content: 'asdf asdfdasfadsf asdfadsf adfasdfdfs.',
        },
        {
          title: 'zzzzzzzzzzzzzzz',
          content: 'asdf asdfdasfadsf asdfadsf adfasdfdfs.',
        },

      ]}
    </BlockNoPadding>
  </div>
);

const Testimonials = props => (
  <div className="productShowcaseSection paddingBottom lightBackground">
    <h2 style={{ fontWeight: "bold", paddingTop: "25px", paddingBottom: "25px" }}>*** User testimonials ***</h2>
    <div className="testimonials">
      <Container padding={[]}>
        <GridBlock align="center"
                   contents={[
                     {
                       content:
                         "*dddddddddddddddd*",
                       image: `${siteConfig.baseUrl}docs/assets/people/kuh.jpg`,
                       imageAlign: "top",
                       title: '<div style="line-height: 20px">name1 <br/><font size="2">job1</font><br/><font size="2">responsibilities1</font></div>'
                     },
                     {
                       content:
                         "*eeeeeeeeeeeeeeeeeeee*",
                       image: `${siteConfig.baseUrl}docs/assets/people/topping.png`,
                       imageAlign: "top",
                       title: '<div style="line-height: 20px">name2 <br/><font size="2">job2</font><br/><font size="2">responsibilities2</font></div>'
                     },
                     {
                       content:
                         "*fffffffffffffffffffff*",
                       image: `${siteConfig.baseUrl}docs/assets/people/foltz.jpg`,
                       imageAlign: "top",
                       title: '<div style="line-height: 20px">name3<br/><font size="2">job3</font><br/><font size="2">responsibilities3</font></div>'
                     }
                   ]}
                   layout="threeColumn"
        />
      </Container>
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div>
        <HomeSplash language={language}/>
        <div className="mainContainer">
          <Features/>
          <OPQFeatures/>
          <Testimonials/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
