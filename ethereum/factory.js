import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0xc15922DbD0942c94a41afDC4082757E41e356BEd'    
        );

export default interface;
