(function (orbium, undefined) {
  orbium.Menu = function () {
    var shadowFactor = 17;
    var textFactor = 2.5;

    var menu = null;

    var main = null;
    var lvl = null;
    var sett = null;
    var abo = null;
    var fail = null;
    var compl = null;

    var start = null;
    var startFunc = null;
    var select = null;
    var settings = null;
    var about = null;

    var support = null;
    var credits = null;
    var filler5 = null;
    var abob = null;
    var copy = null;
    var filler6 = null;

    var pack = null;
    var nr = null;
    var edit = null;
    var prev = null;
    var next = null;
    var play = null;
    var lvlb = null;

    var sound = null;
    var tutorial = null;
    var limits = null;
    var filler0 = null;

    var debug = null;
    var logo = null;
    var settb = null;

    var dbg = null;
    var reset = null;
    var unlock = null;

    var lgo = null;
    var lgob = null;
    var loading = null;
    var copyright = null;

    var info = null;
    var credb = null;

    var fai = null;
    var filler3 = null;
    var filler4 = null;
    var retry = null;
    var failb = null;

    var comp = null;
    var nextl = null;
    var compb = null;

    var contact = null;
    var gfx = null;

    this.construct = function () {
      menu = document.getElementById("menu");

      main = document.getElementById("main");
      lvl = document.getElementById("lvl");
      sett = document.getElementById("sett");
      abo = document.getElementById("abo");
      fail = document.getElementById("fail");
      compl = document.getElementById("compl");

      start = document.getElementById("start");
      select = document.getElementById("select");
      settings = document.getElementById("settings");
      about = document.getElementById("about");

      support = document.getElementById("support");
      credits = document.getElementById("credits");
      filler5 = document.getElementById("filler5");
      abob = document.getElementById("abob");
      copy = document.getElementById("copy");
      filler6 = document.getElementById("filler6");

      pack = document.getElementById("pack");
      nr = document.getElementById("nr");
      edit = document.getElementById("edit");
      prev = document.getElementById("prev");
      next = document.getElementById("next");
      play = document.getElementById("play");
      lvlb = document.getElementById("lvlb");

      sound = document.getElementById("sound");
      tutorial = document.getElementById("tutorial");
      limits = document.getElementById("limits");
      filler0 = document.getElementById("filler0");

      debug = document.getElementById("debug");
      logo = document.getElementById("logo");
      settb = document.getElementById("settb");

      dbg = document.getElementById("dbg");
      reset = document.getElementById("reset");
      unlock = document.getElementById("unlock");

      lgo = document.getElementById("lgo");
      lgob = document.getElementById("lgob");
      loading = document.getElementById("loading");
      copyright = document.getElementById("copyright");

      info = document.getElementById("info");
      credb = document.getElementById("credb");

      fai = document.getElementById("fai");
      filler3 = document.getElementById("filler3");
      filler4 = document.getElementById("filler4");
      retry = document.getElementById("retry");
      failb = document.getElementById("failb");

      comp = document.getElementById("comp");
      nextl = document.getElementById("nextl");
      compb = document.getElementById("compb");

      contact = document.getElementById("contact");
      gfx = document.getElementById("gfx");

      var left = orbium.xpos + orbium.Marble.size;
      var top = orbium.ypos + orbium.Marble.size;
      var width = orbium.width - orbium.Marble.size * 2;
      var height = orbium.height - orbium.Marble.size * 2;
      var textShadow = Math.round(orbium.Tile.size / shadowFactor);

      menu.style.visibility = "hidden";
      menu.style.left = "" + left + "px";
      menu.style.top = "" + top + "px";
      menu.style.width = "" + width + "px";
      menu.style.height = "" + height + "px";
      menu.style.fontSize = orbium.Tile.size + "px";
      menu.style.textShadow = "0px 0px " + textShadow + "px #ffffff";

      var fontSize = Math.round(orbium.Tile.size / textFactor);

      pack.style.fontSize = "" + fontSize + "px";
      nr.style.fontSize = "" + fontSize + "px";
      edit.style.fontSize = "" + fontSize + "px";
      prev.style.fontSize = "" + fontSize + "px";
      next.style.fontSize = "" + fontSize + "px";
      play.style.fontSize = "" + fontSize + "px";
      lvlb.style.fontSize = "" + fontSize + "px";

      sound.style.fontSize = "" + fontSize + "px";
      tutorial.style.fontSize = "" + fontSize + "px";
      limits.style.fontSize = "" + fontSize + "px";
      filler0.style.fontSize = "" + fontSize + "px";

      debug.style.fontSize = "" + fontSize + "px";
      logo.style.fontSize = "" + fontSize + "px";
      settb.style.fontSize = "" + fontSize + "px";

      reset.style.fontSize = "" + fontSize + "px";
      unlock.style.fontSize = "" + fontSize + "px";

      fai.style.fontSize = "" + fontSize + "px";
      filler3.style.fontSize = "" + fontSize + "px";
      filler4.style.fontSize = "" + fontSize + "px";
      retry.style.fontSize = "" + fontSize + "px";
      failb.style.fontSize = "" + fontSize + "px";

      comp.style.fontSize = "" + fontSize + "px";
      nextl.style.fontSize = "" + fontSize + "px";
      compb.style.fontSize = "" + fontSize + "px";
    };

    this.setupTouchEvents = function () {
      orbium.Util.attachListener(start, "touchstart",
                startFunc = function() {orbium.menu.start();});
      orbium.Util.attachListener(select, "touchstart", function() {orbium.menu.select();});
      orbium.Util.attachListener(settings, "touchstart", function() {orbium.menu.settings();});
      orbium.Util.attachListener(about, "touchstart", function() {orbium.menu.about();});

      orbium.Util.attachListener(pack, "touchstart", function() {orbium.menu.changePack();});
      orbium.Util.attachListener(edit, "touchstart", function() {orbium.editor.edit();});
      orbium.Util.attachListener(prev, "touchstart", function() {orbium.menu.prev();});
      orbium.Util.attachListener(next, "touchstart", function() {orbium.menu.next();});
      orbium.Util.attachListener(play, "touchstart", function() {orbium.menu.start();});
      orbium.Util.attachListener(lvlb, "touchstart", function() {orbium.menu.lvlb();});

      orbium.Util.attachListener(support, "touchstart", function() {orbium.menu.support();});
      orbium.Util.attachListener(credits, "touchstart", function() {orbium.menu.credits();});
      orbium.Util.attachListener(abob, "touchstart", function() {orbium.menu.abob();});

      orbium.Util.attachListener(sound, "touchstart", function() {orbium.menu.toggleSound();});
      orbium.Util.attachListener(tutorial, "touchstart", function() {orbium.menu.toggleTutorial();});
      orbium.Util.attachListener(limits, "touchstart", function() {orbium.menu.toggleLimits();});
      orbium.Util.attachListener(settb, "touchstart", function() {orbium.menu.settb();});

      orbium.Util.attachListener(debug, "touchstart", function() {orbium.menu.debug();});
      orbium.Util.attachListener(reset, "touchstart", function() {orbium.menu.reset();});
      orbium.Util.attachListener(unlock, "touchstart", function() {orbium.menu.unlock();});
      orbium.Util.attachListener(editoron, "touchstart", function() {orbium.menu.editoron();});
      orbium.Util.attachListener(perfon, "touchstart", function() {orbium.menu.perfon();});
      orbium.Util.attachListener(connecton, "touchstart", function() {orbium.menu.connecton();});

      orbium.Util.attachListener(logo, "touchstart", function() {orbium.menu.logo();});

      orbium.Util.attachListener(credb, "touchstart", function() {orbium.menu.credb();});

      orbium.Util.attachListener(retry, "touchstart", function() {orbium.menu.retry();});
      orbium.Util.attachListener(failb, "touchstart", function() {orbium.menu.failb();});

      orbium.Util.attachListener(nextl, "touchstart", function() {orbium.menu.playNext();});
      orbium.Util.attachListener(compb, "touchstart", function() {orbium.menu.compb();});

      orbium.Util.attachListener(contact, "touchstart", function() {orbium.menu.contact();});
      orbium.Util.attachListener(gfx, "touchstart", function() {orbium.menu.gfx();});

      this.updateStart();
      this.updateSound();
      this.updateTutorial();
      this.updateLimits();
    };

    this.setupMouseEvents = function () {
      orbium.Util.attachListener(start, "mousedown", startFunc = function() {orbium.menu.start();});
      orbium.Util.attachListener(select, "mousedown", function() {orbium.menu.select();});
      orbium.Util.attachListener(settings, "mousedown", function() {orbium.menu.settings();});

      orbium.Util.attachListener(pack, "mousedown", function() {orbium.menu.changePack();});
      orbium.Util.attachListener(edit, "mousedown", function() {orbium.editor.edit();});
      orbium.Util.attachListener(prev, "mousedown", function() {orbium.menu.prev();});
      orbium.Util.attachListener(next, "mousedown", function() {orbium.menu.next();});
      orbium.Util.attachListener(play, "mousedown", function() {orbium.menu.start();});
      orbium.Util.attachListener(lvlb, "mousedown", function() {orbium.menu.lvlb();});

      orbium.Util.attachListener(sound, "mousedown", function() {orbium.menu.toggleSound();});
      orbium.Util.attachListener(tutorial, "mousedown", function() {orbium.menu.toggleTutorial();});
      orbium.Util.attachListener(limits, "mousedown", function() {orbium.menu.toggleLimits();});
      orbium.Util.attachListener(settb, "mousedown", function() {orbium.menu.settb();});

      orbium.Util.attachListener(debug, "mousedown", function() {orbium.menu.debug();});
      orbium.Util.attachListener(reset, "mousedown", function() {orbium.menu.reset();});
      orbium.Util.attachListener(unlock, "mousedown", function() {orbium.menu.unlock();});

      orbium.Util.attachListener(retry, "mousedown", function() {orbium.menu.retry();});
      orbium.Util.attachListener(failb, "mousedown", function() {orbium.menu.failb();});

      orbium.Util.attachListener(nextl, "mousedown", function() {orbium.menu.playNext();});
      orbium.Util.attachListener(compb, "mousedown", function() {orbium.menu.compb();});

      this.updateStart();
      this.updateSound();
      this.updateTutorial();
      this.updateLimits();
    };

    this.showMain = function () {
      menu.style.opacity = "0.8";
      menu.style.filter = "alpha(opacity=80)";

      menu.style.visibility = "visible";
      main.style.visibility = "visible";
    };

    this.hideMain = function () {
      menu.style.visibility = "hidden";
      main.style.visibility = "hidden";
    };

    this.showLvl = function () {
      orbium.machine.resetLevel();

      menu.style.opacity = "0.6";
      menu.style.visibility = "visible";

      if (orbium.Machine.editorMode) {
        pack.style.visibility = "visible";
        edit.style.visibility = "visible";
      } else {
        pack.style.visibility = "hidden";
        edit.style.visibility = "hidden";
      }

      this.setPackName();
      this.setLvlNr();

      lvl.style.visibility = "visible";
      lvl.style.top = "-50px";
    };

    this.hideLvl = function () {
      lvl.style.visibility = "hidden";
      edit.style.visibility = "hidden";
      pack.style.visibility = "hidden";
    };

    this.showSett = function () {
      menu.style.visibility = "visible";

      sett.style.visibility = "visible";
      sett.style.top = "30%";
    };

    this.hideSett = function () {
      menu.style.visibility = "hidden";
      sett.style.visibility = "hidden";
    };

    this.showAbout = function () {
      menu.style.visibility = "visible";

      abo.style.visibility = "visible";
      abo.style.top = "20%";

      support.innerHTML = "지원";
    };

    this.hideAbout = function () {
      menu.style.visibility = "hidden";
      abo.style.visibility = "hidden";
    };

    this.showDbg = function () {
      menu.style.visibility = "visible";

      dbg.style.visibility = "visible";
      dbg.style.top = "30%";
    };

    this.hideDbg = function () {
      menu.style.visibility = "hidden";
      dbg.style.visibility = "hidden";
    };

    this.showLgo = function () {
      menu.style.visibility = "visible";
      menu.style.left = "" + orbium.xpos + "px";
      menu.style.top = "" + orbium.ypos + "px";
      menu.style.width = "" + orbium.width + "px";
      menu.style.height = "" + orbium.height + "px";
      menu.style.height = "" + orbium.height + "px";
      menu.style.webkitBorderRadius = "0px";
      menu.style.mozBorderRadius = "0px";

      lgob.style.left = "" + Math.round(orbium.Tile.size * 1.6) + "px";
      lgob.style.fontSize = "" + Math.round(orbium.Tile.size * 1.1) + "px";
      lgob.style.letterSpacing = "" +
        Math.round(orbium.Tile.size / 14) + "px";

      loading.style.left = "" + Math.round(orbium.Tile.size * 1.7) + "px";
      loading.style.fontSize = "" + Math.round(orbium.Tile.size / 4) + "px";
      loading.style.letterSpacing = "" +
        Math.round(orbium.Tile.size / 3) + "px";

      copyright.style.left = "" + Math.round(orbium.Tile.size * 2.13) + "px";
      copyright.style.top = "" + Math.round(orbium.Tile.size * 3.12) + "px";
      copyright.style.fontSize = "" + Math.round(orbium.Tile.size / 9) + "px";
      copyright.style.letterSpacing = "" +
        Math.round(orbium.Tile.size / 14) + "px";

      lgo.style.visibility = "visible";
      lgo.style.top = "39%";
    };

    this.showFail = function (msg) {
      menu.style.visibility = "visible";
      fail.style.visibility = "visible";
      fail.style.top = "35%";

      this.updateFail(msg);
    };

    this.hideFail = function () {
      menu.style.visibility = "hidden";
      fail.style.visibility = "hidden";
    };

    this.showCompl = function () {
      if (orbium.machine.levnr === orbium.level.length - 1) {
        compl.style.top = "35%";
        comp.innerHTML = "축하합니다. 모든 레벨을 끝내셨습니다!";
        nextl.innerHTML = "시작";
      } else {
        // Save level progress, set the level after just completed
        orbium.machine.saveLevel(orbium.machine.levnr + 1);

        compl.style.top = "35%";
        comp.innerHTML = "레벨 완료!";
        nextl.innerHTML = "다음";
      }

      menu.style.visibility = "visible";
      compl.style.visibility = "visible";
    };

    this.hideCompl = function () {
      menu.style.visibility = "hidden";
      compl.style.visibility = "hidden";
    };

    this.updateStart = function () {
      if (orbium.has_touch_screen) {
        orbium.Util.detachListener(start, "touchstart", startFunc);
        orbium.Util.attachListener(start, "touchstart", startFunc = function() {orbium.menu.start();});
      } else {
        orbium.Util.detachListener(start, "mousedown", startFunc);
        orbium.Util.attachListener(start, "mousedown", startFunc = function() {orbium.menu.start();});
      }

      start.innerHTML = "시작";
    };

    this.updateRestart = function () {
      if (orbium.has_touch_screen) {
        orbium.Util.detachListener(start, "touchstart", startFunc);
        orbium.Util.attachListener(start, "touchstart", startFunc = function() {orbium.menu.restart();});
      } else {
        orbium.Util.detachListener(start, "mousedown", startFunc);
        orbium.Util.attachListener(start, "mousedown", startFunc = function() {orbium.menu.restart();});
      }

      start.innerHTML = "시작";
    };

    this.updateResume = function () {
      if (orbium.has_touch_screen) {
        orbium.Util.detachListener(start, "touchstart", startFunc);
        orbium.Util.attachListener(start, "touchstart", startFunc = function() {orbium.menu.resume();});
      } else {
        orbium.Util.detachListener(start, "mousedown", startFunc);
        orbium.Util.attachListener(start, "mousedown", startFunc = function() {orbium.menu.resume();});
      }

      start.innerHTML = "확인";
    };

    this.updateSound = function () {
      // If not set set it to false
      var soundEnabled = orbium.storage.readValue("sound");
      if (soundEnabled === null) {
        orbium.storage.writeValue("sound", false);
      }

      // Read again
      soundEnabled = orbium.storage.readValue("sound");
      soundEnabled = soundEnabled === "true";

      if (soundEnabled) {
        sound.innerHTML = "소리: 켬";
        orbium.player.muted = false;
      } else {
        sound.innerHTML = "소리: 끔";
        orbium.player.muted = true;
      }
    };

    this.updateTutorial = function () {
      if (orbium.tutorial.checkDisableTutorial()) {
        tutorial.innerHTML = "사용법: 없음";

        var textShadow = Math.round(orbium.Tile.size / shadowFactor);

        tutorial.style.cursor = "default";
        tutorial.style.color = "#444444";
        tutorial.style.webkitTextStrokeColor = "#666666";
        tutorial.style.textShadow = "0px 0px " + textShadow + "px #666666";
      } else {
        // If not set set it to true
        var tutorialEnabled = orbium.storage.readValue("tutorial");
        if (tutorialEnabled === null) {
          orbium.storage.writeValue("tutorial", true);
        }

        // Read again
        tutorialEnabled = orbium.storage.readValue("tutorial");
        tutorialEnabled = tutorialEnabled === "true";

        if (tutorialEnabled) {
          tutorial.innerHTML = "사용법: 켬";
        } else {
          tutorial.innerHTML = "사용법: 끔";
        }
      }
    };

    this.updateLimits = function () {
      // If not set set it to true
      var limitsEnabled = orbium.storage.readValue("limits");
      if (limitsEnabled === null) {
        orbium.storage.writeValue("limits", true);
      }

      // Read again
      limitsEnabled = orbium.storage.readValue("limits");
      limitsEnabled = limitsEnabled === "true";

      if (limitsEnabled) {
        limits.innerHTML = "시간제한: 켬";
        orbium.Machine.timeLimits = true;
      } else {
        limits.innerHTML = "시간제한: 끔";
        orbium.Machine.timeLimits = false;
      }
    };

    this.updateFail = function (msg) {
      fai.innerHTML = msg;
    };

    this.setPackName = function () {
      pack.innerHTML = "레벨: " + orbium.packs[orbium.pack_idx].name;
    };

    this.setLvlNr = function () {
      var textShadow = Math.round(orbium.Tile.size / shadowFactor);

      if (orbium.machine.levnr === 0) {
        prev.style.color = "#444444";
        prev.style.webkitTextStrokeColor = "#666666";
        prev.style.textShadow = "0px 0px " + textShadow + "px #666666";
        prev.style.cursor = "default";
      } else {
        prev.style.color = "#cccccc";
        prev.style.webkitTextStrokeColor = "white";
        prev.style.textShadow = "0px 0px " + textShadow + "px #ffffff";
        prev.style.cursor = "pointer";
      }

      var reached = orbium.storage.readValue("reachedlevel");
      if (reached !== null) {
        reached = parseInt(reached);
      } else {
        reached = 0;
      }

      if (orbium.machine.levnr === reached) {
        next.style.color = "#444444";
        next.style.webkitTextStrokeColor = "#666666";
        next.style.textShadow = "0px 0px " + textShadow + "px #666666";
        next.style.cursor = "default";
      } else {
        next.style.color = "#cccccc";
        next.style.webkitTextStrokeColor = "white";
        next.style.textShadow = "0px 0px " + textShadow + "px #ffffff";
        next.style.cursor = "pointer";
      }

      var act = orbium.machine.levnr + 1;
      if (act < 10) {
        act = "0" + act;
      }

      var tot = reached + 1;
      if (tot < 10) {
        tot = "0" + tot;
      }

      nr.innerHTML = "" + act + "/" + tot;
    };

    this.prev = function () {
      orbium.machine.prevLevel();
      this.setLvlNr();
    };

    this.next = function () {
      orbium.machine.nextLevel();
      this.setLvlNr();
    };

    this.start = function () {
      orbium.editor.selected = null;

      this.hideMain();
      this.hideLvl();
      this.hideCompl();
      orbium.editor.hideEdit();

      orbium.tutorial.reset();
      orbium.machine.startLevel();
      orbium.sign.show();
    };

    this.restart = function () {
      orbium.editor.selected = null;

      this.hideMain();
      this.hideLvl();
      this.hideCompl();
      orbium.editor.hideEdit();

      orbium.tutorial.reset();
      orbium.machine.restartLevel();
      orbium.sign.show();
    };

    this.pause = function () {
      if (!orbium.machine.paused) {
        orbium.machine.paused = true;

        orbium.sign.hide();
        orbium.tutorial.hide();

        if (orbium.Machine.editorMode) {
          orbium.editor.edit();
        } else {
          this.updateResume();
          this.showMain();
        }
      }
    };

    this.resume = function () {
      this.hideMain();
      orbium.machine.paused = false;
      orbium.sign.show();
    };

    this.select = function () {
      this.hideMain();
      this.showLvl();
    };

    this.lvlb = function () {
      this.hideLvl();
      this.updateStart();
      this.showMain();
    };

    this.settings = function () {
      this.hideMain();
      this.showSett();
    };

    this.debug = function () {
      this.hideSett();
      this.showDbg();
    };

    this.logo = function () {
      this.hideSett();
      this.showLgo();
    };

    this.settb = function () {
      this.hideSett();
      this.showMain();
    };

    this.toggleSound = function () {
      var soundEnabled = orbium.storage.readValue("sound");
      soundEnabled = soundEnabled === "true";

      if (soundEnabled) {
        orbium.storage.writeValue("sound", false);
        orbium.player.muted = true;
      } else {
        orbium.storage.writeValue("sound", true);
        orbium.player.muted = false;
      }

      this.updateSound();
    };

    this.toggleTutorial = function () {
      var tutorialEnabled = orbium.storage.readValue("tutorial");
      tutorialEnabled = tutorialEnabled === "true";

      if (tutorialEnabled) {
        orbium.storage.writeValue("tutorial", false);
      } else {
        orbium.storage.writeValue("tutorial", true);
      }

      this.updateTutorial();
    };

    this.toggleLimits = function () {
      var limitsEnabled = orbium.storage.readValue("limits");
      limitsEnabled = limitsEnabled === "true";

      if (limitsEnabled) {
        orbium.storage.writeValue("limits", false);
      } else {
        orbium.storage.writeValue("limits", true);
      }

      this.updateLimits();
    };

    this.reset = function () {
      orbium.machine.levnr = -1;
      orbium.machine.nextLevel();

      orbium.storage.deleteValue("lastlevel");
      orbium.storage.deleteValue("reachedlevel");

      this.hideDbg();
      this.updateStart();
      this.showMain();
    };

    this.unlock = function () {
      orbium.storage.writeValue("reachedlevel", orbium.level.length - 1);

      this.hideDbg();
      this.updateStart();
      this.showMain();
    };

    this.editoron = function () {
      orbium.Machine.editorMode = true;
      orbium.pack_idx = 1;

      orbium.packs[orbium.pack_idx] = {
        id: orbium.Util.generateUniqeString(),
        name: "NEW",
        level: eval(
          "[[" +
          "'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00'," +
          "'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00'," +
          "'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00'," +
          "'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00'," +
          "'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'E00', 'N00'," +
          "0, 20, 10" +
          "]]"
        )
      };

      orbium.level = orbium.packs[orbium.pack_idx].level;

      orbium.machine.levnr = -1;
      orbium.machine.nextLevel();

      this.hideDbg();
      this.updateStart();
      this.showMain();
    };

    this.connecton = function () {
      orbium.client = new orbium.Client("ws://192.168.0.100:1991");

      this.hideDbg();
      this.updateStart();
      this.showMain();
    };

    this.credits = function () {
      this.hideAbout();
      this.showCreds();
    };

    this.abob = function () {
      this.hideAbout();
      this.showMain();
    };

    this.support = function () {
      window.location.href = "mailto:bnilsson@me.com";
    };

    this.about = function () {
      this.hideMain();
      this.showAbout();
    };

    this.fail = function (msg) {
      this.showFail(msg);
    };

    this.failb = function () {
      this.hideFail();
      this.updateRestart();
      this.showMain();
    };

    this.retry = function () {
      this.hideFail();

      orbium.tutorial.reset();
      orbium.machine.restartLevel();
      orbium.sign.show();
    };

    this.playNext = function () {
      if (orbium.machine.levnr === orbium.level.length-1) {
        orbium.machine.levnr = -1;
      }

      orbium.machine.nextLevel();
      this.restart();
    };

    this.compb = function () {
      this.hideCompl();

      if (orbium.machine.levnr === orbium.level.length - 1) {
        orbium.machine.levnr = -1;
      }

      orbium.machine.nextLevel();
      this.updateRestart();
      this.showMain();
    };

    this.contact = function () {
      window.location.href = "mailto:bnilsson@me.com";
    };

    this.gfx = function () {
      window.location.href = "http://www.theairtightgarage.net";
    };

    this.changePack = function () {
      if (orbium.pack_idx < orbium.packs.length - 1) {
        orbium.pack_idx++;
      } else {
        orbium.pack_idx = 0;
      }

      orbium.level = orbium.packs[orbium.pack_idx].level;

      this.setPackName();

      orbium.machine.resetLevel();
    };

    this.construct.apply(this, arguments);
  };
})(typeof window == "object" ? window.orbium = window.orbium || {} : orbium);
