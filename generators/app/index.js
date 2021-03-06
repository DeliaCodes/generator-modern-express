'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the breathtaking ${chalk.red('generator-modern-express')} generator!`
      )
    );

    const prompts = [];
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('server'), this.destinationPath('server'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
