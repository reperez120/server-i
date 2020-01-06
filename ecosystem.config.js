module.exports = {
  apps : [{
    name: 'server-i',
    script: './index.js',
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-18-224-150-179.us-east-2.compute.amazonaws.com',
      key  : '~/.ssh/i.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-i.git',
      path : '/home/ubuntu/server-i',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
