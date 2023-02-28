const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"],
    a = [],
    l = document.querySelector("#btnPedir"),
    n = document.querySelector("#btnMeQuedo"),
    d = document.querySelector("#btnNuevo"),
    o = document.querySelectorAll(".divCartas"),
    s = document.querySelectorAll("small"),
    i = (t = 2) => {
      (e = u()), (a = []);
      for (let r = 0; r < t; r++) a.push(0);
      s.forEach((e) => (e.innerText = 0)),
        o.forEach((e) => (e.innerText = "")),
        (l.disabled = !1),
        (n.disabled = !1);
    },
    u = () => {
      e = [];
      for (let a = 2; a <= 10; a++) for (let l of t) e.push(a + l);
      for (let n of t) for (let d of r) e.push(d + n);
      return _.shuffle(e);
    },
    c = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    h = (e, t) => ((a[t] = a[t] + $(e)), (s[t].innerText = a[t]), a[t]),
    f = (e, t) => {
      let r = document.createElement("img");
      (r.src = `assets/cartas/${e}.png`),
        r.classList.add("carta"),
        o[t].append(r);
    },
    b = () => {
      let [e, t] = a;
      setTimeout(() => {
        t === e
          ? alert("Nadie gana :(")
          : e > 21
          ? alert("Computadora gana")
          : t > 21
          ? alert("Jugador Gana")
          : alert("Computadora Gana");
      }, 100);
    },
    g = (e) => {
      let t = 0;
      do {
        let r = c();
        (t = h(r, a.length - 1)), f(r, a.length - 1);
      } while (t < e && e <= 21);
      b();
    };
  return (
    l.addEventListener("click", () => {
      let e = c(),
        t = h(e, 0);
      f(e, 0),
        t > 21
          ? (console.warn("Lo siento mucho, perdiste"),
            (l.disabled = !0),
            (n.disabled = !0),
            g(t))
          : 21 === t &&
            (console.warn("21, genial!"),
            (l.disabled = !0),
            (n.disabled = !0),
            g(t));
    }),
    n.addEventListener("click", () => {
      (l.disabled = !0), (n.disabled = !0), g(a[0]);
    }),
    d.addEventListener("click", () => {
      i();
    }),
    { nuevoJuego: i }
  );
})();
