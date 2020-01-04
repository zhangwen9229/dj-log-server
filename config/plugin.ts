import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    io: {
        enable: true,
        package: 'egg-socket.io',
    }
};

export default plugin;
