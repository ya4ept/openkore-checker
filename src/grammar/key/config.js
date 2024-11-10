class config {
  check_key(key) {
    return key in this.keys;
  }

  check_value(key, value) {
    if (this.check_key(key)) {
      return this.keys[key].test(value);
    }
    return true;
  }

  check_block(block) {
    return block in this.blocks;
  }

  check_block_name(block, name) {
    if (this.check_block(block)) {
      if (this.blocks[block].name) {
        return this.blocks[block].name.test(name);
      }
    }
    return true;
  }

  check_block_key(block, key) {
    if (this.check_block(block)) {
      return key in this.blocks[block].keys;
    }
    return false;
  }

  check_block_keyvalue(block, key, value) {
    if (this.check_block(block)) {
      if (this.blocks[block].keys[key]) {
        return this.blocks[block].keys[key].test(value);
      }
    }
    return true;
  }

  keys = {
    master: /.*/,
    server: /^\d?$/,
    username: /.*/,
    password: /.*/,
    loginPinCode: /^(\d{4,6})?$/,
    char: /^(\d{1,2})?$/,

    poseidonServer: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?$/,
    poseidonPort: /^\d*$/,

    bindIp: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?$/,
    forceMapIP: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?$/,

    XKore: /^(0|1|2|3)?$/,
    XKore_port: /^\d*$/,
    XKore_dll: /.*/,
    XKore_injectDLL: /^(0|1)?$/,
    XKore_autoAttachIfOneExe: /^(0|1)?$/,
    XKore_silent: /^(0|1)?$/,
    XKore_bypassBotDetection: /^(0|1)?$/,
    XKore_exeName: /.*/,

    XKore_listenIp: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?$/,
    XKore_listenPort: /^\d*$/,
    XKore_publicIp: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?$/,
    XKore_ID: /.*/,

    secureAdminPassword: /^(0|1)?$/,
    adminPassword: /.*/,
    callSign: /.*/,
    commandPrefix: /^.?$/,
    callSignGM: /^(0|1)?$/,
    inGameAuth: /^(0|1)?$/,

    macAddress: /^([0-9a-fA-F]{12})?$/,

    pauseCharLogin: /^(\d+(\.\d+)?)?$/,
    pauseCharServer: /^(\d+(\.\d+)?)?$/,
    pauseMapServer: /^(\d+(\.\d+)?)?$/,
    ignoreInvalidLogin: /^(0|1)?$/,

    whenInGame_requestCashPoints: /^(0|1)?$/,

    message_length_max: /^\d*$/,

    //alias_

    allowedMaps: /^[a-z_@0-9, ]*$/,
    allowedMaps_reaction: /^(0|1)?$/,

    attackAuto: /^(-1|0|1|2)?$/,
    attackAuto_party: /^(0|1|2)?$/,
    attackAuto_onlyWhenSafe: /^(0|1)?$/,
    attackAuto_followTarget: /^(0|1)?$/,
    attackAuto_inLockOnly: /^(0|1|2)?$/,
    attackAuto_notInTown: /^(0|1)?$/,
    attackAuto_notWhile_storageAuto: /^(0|1)?$/,
    attackAuto_notWhile_buyAuto: /^(0|1)?$/,
    attackAuto_notWhile_sellAuto: /^(0|1)?$/,
    attackAuto_considerDamagedAggressive: /^(0|1)?$/,
    attackBeyondMaxDistance_waitForAgressive: /^(0|1)?$/,
    attackDistance: /^(\d{1,2})?$/,
    attackDistanceAuto: /^(0|1)?$/,
    attackMaxDistance: /^(\d{1,2})?$/,
    attackMaxRouteDistance: /^(\d{1,3})?$/,
    attackMaxRouteTime: /^(\d{1,2})?$/,
    attackMinPlayerDistance: /^(\d{1,2})?$/,
    attackMinPortalDistance: /^(\d{1,2})?$/,
    attackUseWeapon: /^(0|1)?$/,
    attackNoGiveup: /^(0|1)?$/,
    attackCanSnipe: /^(0|1)?$/,
    attackCheckLOS: /^(0|1)?$/,
    attackRouteMaxPathDistance: /^(\d{1,3})?$/,
    attackLooters: /^(0|1)?$/,
    attackLooters_dist: /^(0|1)?$/,
    attackChangeTarget: /^(0|1)?$/,
    aggressiveAntiKS: /^(0|1)?$/,

    attackUpdateMonsterPos: /^(0|1)?$/,

    autoMoveOnDeath: /^(0|1)?$/,
    autoMoveOnDeath_x: /^(\d{1,3})?$/,
    autoMoveOnDeath_y: /^(\d{1,3})?$/,
    autoMoveOnDeath_map: /^[a-z_@0-9]*$/,

    attackEquip_topHead: /.*/,
    attackEquip_midHead: /.*/,
    attackEquip_lowHead: /.*/,
    attackEquip_leftHand: /.*/,
    attackEquip_rightHand: /.*/,
    attackEquip_leftAccessory: /.*/,
    attackEquip_rightAccessory: /.*/,
    attackEquip_robe: /.*/,
    attackEquip_armor: /.*/,
    attackEquip_shoes: /.*/,
    attackEquip_arrow: /.*/,
    attackEquip_costumeTopHead: /.*/,
    attackEquip_costumeMidHead: /.*/,
    attackEquip_costumeLowHead: /.*/,
    attackEquip_shadowLeftHand: /.*/,
    attackEquip_shadowRightHand: /.*/,
    attackEquip_shadowLeftAccessory: /.*/,
    attackEquip_shadowRightAccessory: /.*/,
    attackEquip_costumeRobe: /.*/,
    attackEquip_shadowArmor: /.*/,
    attackEquip_shadowShoes: /.*/,
    attackEquip_costumeFloor: /.*/,

    autoMakeArrows: /^(0|1)?$/,

    autoRestart: /^\d*$/,
    autoRestartMin: /^(\d+(\.\d+)?)?$/,
    autoRestartSeed: /^(\d+(\.\d+)?)?$/,

    autoRestartSleep: /^(0|1)?$/,
    autoSleepMin: /^(\d+(\.\d+)?)?$/,
    autoSleepSeed: /^(\d+(\.\d+)?)?$/,

    autoResponse: /^(0|1)?$/,
    autoResponseOnHeal: /^(0|1)?$/,

    autoSpell: /^(11|MG_NAPALMBEAT|Napalm Beat|Напалмовый удар|14|MG_COLDBOLT|Cold Bolt|Ледяной заряд|19|MG_FIREBOLT|Fire Bolt|Огненный заряд|20|MG_LIGHTNINGBOLT|Lightning Bolt|Молния|13|MG_SOULSTRIKE|Soul Strike|Призрачный удар|17|MG_FIREBALL|Fire Ball|Огненный шар|15|MG_FROSTDIVER|Frost Diver|Ледяная волна)?$/,
    autoSpell_safe: /^(0|1)?$/,
    autoPoison: /^(Paralysis|Яд 'Энерво'|Leech End|Яд 'Крудус'|Oblivion Curse|Яд 'Обливио'|Death Hurt|Яд 'Дамнум'|Toxin|Яд 'Делео'|Pyrexia|Яд 'Фебрис'|Magic Mushroom|Яд 'Фунгус'|Venom Bleed|Яд 'Вескор')?$/,

    avoidGM_namePattern: /.*/,
    avoidGM_near : /^(0|1|2|3|4|5)?$/,
    avoidGM_near_inTown: /^(0|1)?$/,
    avoidGM_talk: /^(0|1)?$/,
    avoidGM_reconnect: /^(\d+(\.\d+)?)?$/,
    avoidGM_ignoreList: /.*/,

    avoidList: /^(0|1)?$/,
    avoidList_inLockOnly: /^(0|1)?$/,
    avoidList_reconnect: /^(\d+(\.\d+)?)?$/,
    avoidList_ignoreList: /.*/,

    avoidHiddenActors: /^(0|1)?$/,
    avoidHiddenMonsters: /^(0|1)?$/,

    cachePlayerNames: /^(0|1)?$/,
    cachePlayerNames_duration: /^(\d+(\.\d+)?)?$/,
    cachePlayerNames_maxSize: /^\d*$/,

    clientSight: /^\d*$/,
  };

  blocks = {
    autoBreakTime: {
      name: /^(all|mon|tue|wed|thu|fri|sat|sun)?$/,
      keys: {
        startTime: /^((([0,1][0-9])|(2[0-3])):[0-5][0-9])?$/,
        stopTime: /^((([0,1][0-9])|(2[0-3])):[0-5][0-9])?$/,
        disabled: /^(0|1)?$/
      },
    },
    autoConfChange: {
      keys: {
        minTime: /^\d*$/,
        varTime: /^\d*$/,
        lvl: /^((-?\d+(?:\.\d+)?)%?\s*(?:-|\.\.)\s*(-?\d+(?:\.\d+)?)%?|(>=?|<=?)?\s*(-?\d+(\.\d+)?)%?)?$/,
        joblvl: /^((-?\d+(?:\.\d+)?)%?\s*(?:-|\.\.)\s*(-?\d+(?:\.\d+)?)%?|(>=?|<=?)?\s*(-?\d+(\.\d+)?)%?)?$/,
        isJob: /^(Novice|Swordsman|Mage|Archer|Acolyte|Merchant|Thief|Knight|Priest|Wizard|Blacksmith|Hunter|Assassin|Peco Knight|Crusader|Monk|Sage|Rogue|Alchemist|Bard|Dancer|Peco Crusader|Wedding Suit|Super Novice|Gunslinger|Ninja|Xmas|Summer|High Novice|High Swordsman|High Magician|High Archer|High Acolyte|High Merchant|High Thief|Lord Knight|High Priest|High Wizard|Whitesmith|Sniper|Assassin Cross|Peco Lord Knight|Paladin|Champion|Professor|Stalker|Creator|Clown|Gypsy|Peco Paladin|Baby Novice|Baby Swordsman|Baby Magician|Baby Archer|Baby Acolyte|Baby Merchant|Baby Thief|Baby Knight|Baby Priest|Baby Wizard|Baby Blacksmith|Baby Hunter|Baby Assassin|Baby Peco Knight|Baby Crusader|Baby Monk|Baby Sage|Baby Rogue|Baby Alchemist|Baby Bard|Baby Dancer|Baby Peco Crusader|Super Baby|Taekwon|Star Gladiator|Flying Star Gladiator|Soul Linker|Munak|Death Knight|Dark Collector|Rune Knight|Warlock|Ranger|Arch Bishop|Mechanic|Glt. Cross|Royal Guard|Sorcerer|Minstrel|Wanderer|Sura|Genetic|Shadow Chaser|Baby Rune|Baby Warlock|Baby Ranger|Baby Bishop|Baby Mechanic|Baby Cross|Baby Guard|Baby Sorcerer|Baby Minstrel|Baby Wanderer|Baby Sura|Baby Genetic|Baby Chaser|Kagerou|Oboro|Rebellion|Summoner|Star Emperor|Soul Reaper|Baby Star Emperor|Baby Soul Reaper)?$/,
      },
    },
    monsterSkill: {
      keys: {},
    },
  };
}

module.exports = config;
