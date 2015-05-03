import map from 'lodash/collection/map';

export default {
    modifiers(prefix, mods) {
        if (!mods) return prefix;
        mods = map(mods.split(' '), (mod) => prefix + '-' + mod);
        mods.unshift(prefix)
        return mods.join(' ');
    }
};