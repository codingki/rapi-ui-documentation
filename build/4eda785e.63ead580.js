(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(A,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return l}));var n=t(0),r=t.n(n);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function c(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function b(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var g=r.a.createContext({}),i=function(A){var e=r.a.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):b(b({},e),A)),t},d=function(A){var e=i(A.components);return r.a.createElement(g.Provider,{value:e},A.children)},O={inlineCode:"code",wrapper:function(A){var e=A.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,c=A.parentName,g=o(A,["components","mdxType","originalType","parentName"]),d=i(t),p=n,l=d["".concat(c,".").concat(p)]||d[p]||O[p]||a;return t?r.a.createElement(l,b(b({ref:e},g),{},{components:t})):r.a.createElement(l,b({ref:e},g))}));function l(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,c=new Array(a);c[0]=p;var b={};for(var o in e)hasOwnProperty.call(e,o)&&(b[o]=e[o]);b.originalType=A,b.mdxType="string"==typeof A?A:n,c[1]=b;for(var g=2;g<a;g++)c[g]=t[g];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},149:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAADWCAYAAAA0ETJuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowMzoxMSAxOTowMDo1NHvZFjUAAAzlSURBVHhe7d1bqFTVH8Dxdf6YaRkSJVaeTmIlBaHRhQpNw+xC2FsIQRCVXSioEKIi6IpUJlE99JDQQwpRUFRWSBlFZllZiEHZ1dKs7KJdtGNp+W/t/yIZna3jyZz5/c/nA4Nrr7Nn3OOTfl177a4tf0kAAAAAgf2n/AoAAAAQlsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQXteWv5QxANBGAwcOLKPt/f7772W0c7vrcwAAIrGCAwAAAAhP4AAAAADCEzgAAACA8AQOAAAAIDyBAwAAAAjPU1QAoEN02lNUfvzxx7Rw4cK0YMGC9P7776dPPvkk5b82jBo1Kh111FHpjDPOSKeeemo68MADyzt27vvvv08ffvhhWr58efV5K1euTCtWrEhr165NP/zwQxo8eHDq7u5Oxx57bDrttNPSOeeck4YMGVLenapz58+fX13XsmXL0nfffZdGjBiRDj300OpaJk+eXL23r/Lnvfzyy39/508//TQNHTo09fT0pOOOOy6NHz8+TZo0Ke2zzz7lHQBApxA4AKBDdErg6O3tTXPnzk133HFH+uabb8psc/vvv3+66aab0sUXX9wQIpqZMGFCWrx4cTlqzciRI9OsWbPS2LFj0+23357mzJlTflLv8ssvr87N19aq9evXp9mzZ6eZM2dWoWVHRo8enW655ZZ03nnnpa6urjILALSbwAEAHaITAseaNWvSJZdckl544YUy05px48ZV8SGvvqizo+vamb322itt2rSpHO3cmWeemR599NG03377lZl6q1evrgJNXrmxK6ZPn16FlH/yvQCA3cceHABAJd8+MmXKlF2OG9miRYvSWWedlb766qsys3vtStzI8ne4//77y1G9/J3PPffcXY4b2b333ptmzJhRjgCAdrOCAwA6RDtXcPzxxx/pwgsvTI8//niZ6ZscSB577LFqxcW29vRKh0GDBqWPPvooHXTQQWWmUf7OF1xwQXriiSfKTN/kPUHyvhwAQHtZwQEAAeQ40OqrL+bNm1cbNy666KL01ltvVZuO/vTTT+mdd95Jl112Wflpo2effTY9+eST5ag1n332WfW5v/76a/r888/TbbfdVn6yvbzR5yOPPFK9Z2fnb9y4Mb322mvlaHvPP/9807iRb2u57777qg1NN2zYUK1KyXuS5I1Mm8krOQCA9rOCAwA6RF/jxK5otoJj8+bN1RNLcsTY1o033phuvfXWpptp5k1I82tb+Skmr7/+ehowYECZ+Z+679fsmq644or08MMPl6Ot8vU0Cxp151977bXVxqHb2tF3fuaZZ9LZZ59djrbKT36ZOHFiWrduXZnZ6u233642QgUA2scKDgDo5/KKjGb/0B8zZky64YYbap8Uct111zX9R/3SpUvTkiVLylHfTJ06tYwa5UfDNlN3fn4kbTP5c5p95/xklGZxI8uPxr3++uvLUaMcOACA9hI4AKCfe+ONN8qo0aWXXpoGDx5cjraX97iYNm1aOWpU95mtyo9ibebjjz8uo0Z15+fbTJrJK0yayU9T2ZHJkyeXUSOBAwDaT+AAgH5u8eLFZdTolFNOKaN6def808BxwAEHlFGjvFdHM3XnN7udJKu7vrxqZUcOO+ywMmpUF14AgD1H4ACAfm7lypVl1Kinp6eM6tVtvPnll1+WUd/k1SHNrF27towa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"},164:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAADhCAYAAAAtbgV7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowMzoxMSAxOTowMDo1NHvZFjUAABFxSURBVHhe7d1njJXFHsDhwa7oNViCAiIWjCiCsXewl2CJMZYvGruxa6JijAWNBTTG+EET+WCMxpZoQMAQsaCIWLAbC3YRuwI2VFCv897hwoFztrBnhb8+T7Jh5uWwezx+OLu/nXemy5w5c/5MAAAAAIF1+fMvZQwAAAAQ0nLlTwAAAICwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMLr8udfypgm+PHHH9NHH32U+vfvX64AAK2ZN29emjhxYpo8eXJ67rnn0qeffppmzJiRunbtmvr06ZO22267tMcee6S99tor/ec//yn/KqUvv/wy3XTTTenhhx9Oyy23XBoyZEg6++yz07rrrlseUWv++/QHH3yQpk2blt566600derU9Oqrr5ZHAABRCRxNlL9pOv7449Ozzz6bRo0albbddtvyNwBAI0899VQaOnRoFRpaM2HChDRo0KBqPHPmzDR48OAqUixs4MCB6bHHHqsJIfOttNJKZVTrt99+KyMAICq3qDTJ/LgxevTo6rdJhx12WHrxxRfL3wIA9dx9993pwAMPbFPcyAYMGFBGKY0ZM2axuJHl1Rjjx48vMwDg30LgaIKF48Z88yPHSy+9VK4AAAubMmVKOvnkk9PcuXPLlZbtvvvuqVu3bmWWqttYGpk+fXoZAQD/FgJHB9WLG/Mtv/zyacUVVywzAP6tnnzyyXT77benyy+/PJ166qnpkEMOSbvsskvq27dv6t69e3UrRe/evatbK/IeE/kxN9xwQxo3blz67rvvymf5Z8l7blxwwQVtjhtZ3oNjYb169SqjxW2wwQZlBAD8W9iDowNaihs9evSols5utdVW5QoA/1aN9n1oixzK84rA008/Pe26667lanx5j4x8a0o9xx57bLVRaA5AK6ywQpo9e3Z655130lprrZX69etXHmUPDgCglsCxhMQNANqqI4FjYUcddVS6+eaba27TiCqvZrn22mvLbIG8uuW+++6rVkG2xcKnqGT537d0iorAAQD/XALHEhA3AGiPZgWObIcddqhO6lpnnXXKlZj222+/6ljYReXNQfNtOp1F4ACAfy57cLSTuAHA0vT8889Xqx+i++STT8qo1pZbbllGAADtYwVHO4gbACyJZq7gmC+Hjq233rrM4unatWvdDUZ//vnnat+NzmIFBwD8cwkcbdRS3OjZs2d66KGHxA0A6mopcHzzzTdptdVWS126dKnea3744Yf09ttvpzvuuKPai6KRq6++ujqFpJGvvvqqOqr8jTfeqDbhnDZtWvW18vX89fr06ZM222yzasXEjjvu2OoGprNmzUqTJk1Kjz76aHrzzTfTe++9l/K3EBtvvHHafPPN07777lsd49rWW2eWVmho1tf9+uuv0xNPPPH/1+P9999Pa665ZnUazjbbbJN222236lab/FoDAH8PgaMNxA0AOqKlwNHoB+v89nzFFVfU3YgzO+igg6q9OBZ1yy23VO9X+Yfvtho0aFCaMGFCmdWaM2dOuuuuu9JVV12Vvvjii3K1vrz56SWXXJJOOOGEtPrqq5er9bX0mrRk0dervcGio4Ejf08wcuTINGLEiPTtt9+Wq/XlgJRvJzriiCOqgAUAdC6BoxXiBgAdtSSBI/vss8+qlRb15JUXL7/8cpktsCTh4OKLL07Dhg0rswXyCSUnnnhieuSRR8qVtsmrQe68887Uq1evcmVxEQPHjBkzqnjTnniUnX/++enKK69c4v9mAKBtbDLaAnEDgKWp0VGnWY4fzVJvL498O8uQIUPaHTeyyZMnp/3337+pz3Fpy6/HwQcf3O64kd14443VLUUAQOcSOBpoLW7YUBSAzvb555+X0eI22GCDMuq4RU8u+f3339O5556bXn311XKl/d5999105pln1t1INJr8epx11lnVfiZLKt9q9Pjjj5cZANAZBI462hI3+vfvX64AQPPlO0hvvfXWMltcewNHjhX5lpN8SkneaDRvZDp+/PhqL4m8UejC8vvc/fffX2a18vtjPsElbzo6e/bs9OKLL6ZTTjml/G2tsWPHpgcffLDM4nr44YfTAw88UGYLrLHGGummm25KH374Yfrpp5+qFSt5v5JG/2/ySg4AoPPYg2MR+RuU/M1bvY3bxA0AlkRLey/M3/th3rx51YaeOT68/vrr1R4W+T2nkeHDh6fzzjuvzBboyB4TWX4egwcPriLGovJeHXnj03obZuZNSPPHovLtL88888xiR7929HnO197P097Ht/R65FtVDzjggDJbIMejvHHrzJkzy5UFXnjhhTRw4MAyAwCayQqORXz33XfVNyb15N9w5cgBAM2Sf+DOH/k40bXXXjv169cvHXnkkS3GjWyfffYpo+bKKzLq/TA/YMCANHTo0LpxI8tH1tb7wf2VV15JU6dOLbN4XnvttbqvRz4ZpV7cyPKxuRdddFGZ1cqBAwDoHALHIvKy0nxrSj7abVGTJk1KxxxzTN3fyADA3+W0007rtH2gpkyZUka1Tj755LTqqquW2eJWWWWVdNJJJ5VZrUafM4K8+qSefJpKSxoFKIEDADqPwFHHRhttVC07rRc58gZhIgcAS8uOO+6YLr300jJrvmeffbaMau28885l1Fijx0QOHI2ee17R0pINN9ywjGrlzVcBgM4hcDSQb0cROQBYlhx++OHVKsOWjo/tqE8++aSMavXu3buMGmu0ueann35aRvHMmDGjjGr16tXr/7cX1fto9P8ob/QKAHQOgaMFrUWOo48+WuQAoNMNGTKkOvHknnvuSWuttVa52jmmT59eRrVWX331MmosnypST6PPGcHHH39cRs3RKJgAAB3nFJU2+OCDD9IhhxySpk2bVq4ssOeee6Z77703devWrVwBgFr5N/qtWXPNNdM666xTbTSab5XMG1VuscUW1W0f6623XnlU6xp9rbaeTpJXYdRbZZBPGVtxxRXLrL78NeqFkPz8F10Z0tHnOV97P097H9+9e/em/jIjr+wQOQCgcwgcbdRa5Pg7fqsGQEwtBY72/kDfmo6Gg1122aXuqSdffPFFq+9z+SSyejFmu+22W2yzziiBY5tttklvvPFGmXVcPmr+pZdeKjMAoJncotJGLd2u8sQTT1R7cuRv7AAgskabY7blVo1Gj8n7VUTV6LnnVS45irT3Q9wAgM4jcLSDyAHAP91OO+1URrUmT55cRo01ekyjz7ksmTt3bhnVyqtP6nnuuefKCABYVggc7SRyAPBPlo+hree2226r9uFo5Oeff04jR44ss1rbb799GS19ea+TembNmlVGtRo99+uvvz798ssvZQYALAsEjiXQWuTIp6uIHABElFcsbLvttmW2wNtvv52uvvrqVG/rrnxt+PDh6a233ipXFujXr1/DaLI05I1c63n66afLqNYee+xR9/jbSZMmpTPOOCN9//335UrrbHsGAJ1L4FhCLUWOiRMnihwAhLTCCiuk888/v8xq3XDDDemkk05Kr7zySpozZ0718frrr6fTTz89XXvtteVRtc4555wWN1n9u+XTaeq58MIL09ixY9Ps2bPLlf/p2rVrOvvss8us1p133pl22223auVKjjs//vhj+uOPP9Kvv/5anbySo1A+3nfEiBFVKMmvGwDQeZyi0kEtna4yePDg6ghZp6sA/Lu19AN+3niymZpxOsm8efOqWy5Hjx5driyZvfbaK40aNSqtssoq5coCzXieWXs/T16FMmzYsDJb3JZbbplefvnlMvuffGvOkCFD2rQPSUvuuuuudOSRR5YZANBsVnB0UGsrOfISVgCIJK/iuPnmm+u+t7VVz5490y233FI3bixNBx98cBnVV2/PjbyKI+9B0uiEmbaqdwsPANA8AkcTNIocecnqoYceWmYAEMf6669f3V6x6667littN2DAgPToo49W74/Lmvzchg4dWmaL22KLLcqoVt++fdNjjz1W3ZKypF577bUyAgA6g8DRJItGjhw3jjvuuGoMABH16tUrjRkzJl133XUNTx9ZWF6tcdlll6UJEyakTTbZpFxd9uTneM0116TVVlutXFmgpVUrvXv3TuPGjatWc/Tp06dcbbuVV165jACAzmAPjibLe3K88MIL6aijjipXACC+r776Kj311FPVKoa8eeaHH35YbaiZA/+mm26a9t577zRo0KDUo0eP8i+WfTNmzKhWqUyZMiW98847afr06emRRx5p0605+VjcqVOnVvty5D8///zz6t/nvT/WXXfd1L1792rVRw49/fv3TwMHDgz12gBARAIHAAAAEJ5bVAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwBA4AAAAgPIEDAAAACE/gAAAAAMITOAAAAIDwukycOPHPMgYAAAAIyQoOAAAAIDyBAwAAAAivy5w5c9yiAgAAAIRmBQcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOEJHAAAAEB4AgcAAAAQnsABAAAAhCdwAAAAAOF1+fMvZQwAAAAQkhUcAAAAQHgCBwAAABCewAEAAAAEl9J/AfjPYVkNlPOyAAAAAElFTkSuQmCC"},165:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAADgCAYAAADmMtbeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowMzoxMSAxOTowMDo1NHvZFjUAABXRSURBVHhe7d0LkNVl+QfwFxMhhcwwwEBRSxPJazaZSZqDk1qQea/GbtK9YNJUGm+hqWFKZpHXcsYsGtMsL3gpDTMlzRwEFIQC8xaKmLdYTdR/z8/X/7Jwzp6zl4B3/Xxmdnjf355zlmWZ2XO+53mfp1dLS8srCQAAAKBg6+Q/AQAAAIol4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACK1+uV/8prAAAAgCKp4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAiifgAAAAAIon4AAAAACKJ+AAAAAAitfrlf/KawAAAGA1ipfkCxYsSIsWLUrrrbdeGjFiRBo4cGD+LB0h4AAAAIA14OGHH07jx49PV199db6SUu/evdOECRPSMccck/r06ZOv0gwBBwAAAKxmjz32WNp7773TvHnz8pW2xo4dm6ZMmZJ69eqVr9CIHhwAAACwmk2ePLluuBEuuuiidNNNN+UdzRBwAAAAwGq0fPnydMkll+RdfTfccENe0QwBBwCwxixevLg6Z7zDDjuknXbaKZ144onpiSeeyJ8FgJ7p6aefTkuXLs27+h566KG8ohl6cAAAa8STTz6Z9txzz1XKc3feeef0+9//PvXr1y9fAYCe5YUXXkiDBg1Ky5Yty1dq+9KXvpTOOeecvKMRFRwAwBpxzTXX1Dx7fPfddyvJBaBHi+kon/jEJ/KuvlGjRuUVzRBwAEAn3HfffenHP/5xOvzww9Ouu+6ahgwZUn3ssssuacyYMWnixInVyLennnoq34OVxWi8etr7HAD0BEcffXQaPHhw3q0qnk/st99+eUczHFEBgA6YP39+Ov7449NvfvObfKV9/fv3r0KQL37xi2n48OH56ur33HPPpQceeCAtXLiw+h7mzp2b7rrrrnTPPffkWzSvux4rmqvFCLxapk6dmg488MC8A4Ceafbs2emII45IM2fOzFdeFc8dYsrKhhtumK/QDAEHADQpjlR89rOfrRqDdVTMub/22mvzbvVbb7318qqt//znP3nVvO56LD04AODVfhwzZsyo3jiI37HReHu77bbLn6UjBBwA0IQ77rgjfehDH2rYDKye888/vwpH1pS1MeAIMUXl7LPPTtddd121j3Lc8ePHp4033rjaAwA0S8ABAA3EC/e99tor3XnnnflKx8W7MkOHDs271W9tDTgAALqLJqMA0MDvfve7LoUb++677xoNNwAAXg8EHADQQPSDqCfOyV5//fXpscceSy0tLdXUlL///e/pV7/6VRVshIMOOqj6EwCA/x1HVACggZEjR1Y9OGq5/fbbq9GwtcSv2D//+c9pyy23TIMGDcpXm7NkyZL0hz/8oQpXYiRthCbRSX2zzTarmnDuvvvu1bGZ9ddfP9+jfT3piMoTTzxRTW9ZsGBB9e/yj3/8Iy1atCgtXbq0Cpief/75qmJmk002qf6tdtttt6qZaVealsbXuPXWW6uP+LoPPfRQ1SR1wIABaeDAgWnYsGHVz+Yd73hH2mqrrdI222xTXW9k+fLlafr06dVHVAnFdJrHH388bbTRRtXY4XicESNGVN9H/D/bYIMN8j0BgJUJOACggXihGYFDLc8++2zq06dP3nVdjGC98MIL0xlnnFG9YG/P1ltvnU466aSqQqRXr175am31QolGaoUWq+Ox6oUlEVREqNRRETpMnDixw9U0EWxEE9QpU6bkK83bdddd0x//+Me8W1WM1h03blz1ZzPie5gzZ07DnzUAvF4JOACggS222CI98sgjedfWgw8+mAYPHpx3XRNf43Of+1xVudERRx55ZDr55JPbDR56SsDR2a/9mlNPPTUdffTRede+qJ6JyTdx/Kiz6n0fN998c9p///2rapNmfepTn0oXXXRR3gHQU8yePTtddtll6d577019+/ZN73vf+9LHP/5xE8U6QQ8OAGggjpjUc9ZZZ1VHUboqjl2MHj26w+FGmDx5cvXCncaOO+64qmdKIzfeeGPab7/9uhRu1BNHUD7zmc90KNwI733ve/MKgJ4iqjbf/e53p0mTJqVrrrkmXX755emoo46qQo6ZM2fmW9EsAQcANLDHHnvk1ap+8IMfpK9+9atVL4jOeumll9LXv/716vhBZ51++ulVVQCNHXvssVXvi3riWMrYsWPzrvtNnTo1LV68OO+aFw1tAeg5YkpbPIeoJX4XHXLIIQ2Pq9KWgAMAGhgzZkxe1RbHBoYPH54OP/zwdMstt6SXX345f6Y506ZNS1dccUXeterfv3/V/yEaaP773/9Ojz76aLr00kvTpptumm/RVlRyvF797W9/q5p+Llu2LD3zzDNVuW+9J41z586t2zQ2xL95vQDi85//fNUDJJ5wRgXG008/nRYuXJg/25wbbrghr9r6xje+UTUwjT4s8RE/79tuu62qEtp7773Ttttum28JQE9w5pln5lVt0Xg6jq7QPD04AKAJ48ePT+eee27etS+aS0afhzji8IY3vCFfrS0qCaJxZkzQWNlVV12V9tlnn7xrNW/evKqq5F//+le+0uovf/lLzXf6O9rroj1r8rE6cvt4ivPJT36yKvddWfQsmTBhQt61iukoMbnkxRdfzFdaRZVMlA3X0pG/1+abb16FFyuLgKYrk14AKEcE2W95y1vyrr74PXbxxRfnHY2o4ACAJpxyyintHlVZUYyGPfDAA6uAI0a8tmfWrFk1w42Y9lEr3AjxAjyOWdQSAQevimkj0ZizlqjwqCWmntQKNyKEipCrO9R6/BDhCgCvD/V+F6ysM28evJ4JOACgCW9605uqSoB6L5hriYahUc0RlRj11Bt5GtNU2jNq1Ki8akvA0daIESPyqq37778/r9qKIyG1xNGUddddN++6ZtiwYXnV1sEHH5yuvPLKDjcfBaA8b37zm6vjrY3U+z1GbQIOAGjShhtuWPXbuPbaa+sGDCuLF6tRjRGVAbXMmDEjr9rafvvt86q2ei+So4cDreqN2IupNbVEf45a3vOe9+RV140cOTKv2po/f3469NBDqyezUTFUr8oEgPJFlWE0GG9P7969q/Cb5gk4AKCDouFjhBzRUDTGfcYTkEa+/OUvp5aWlrxr9cgjj+RVW0OHDq36OtT7eOtb35pv2db/Yqxpyfr06ZNXbdXqgREefvjhvGpr8ODBedV1EXi1J46qRMARYwM//OEPVyNrtUwD6HniOUR7laE/+clP0lZbbZV3NEPAAQCdEO+8xIz6Cy64oDrucNxxx6W+ffvmz64qKiuuv/76vGsVY+C6U73A5PVqnXU69lQnGn3WEqFSd4lqkJiY0owYIfiRj3ykegIcE1sA6Dni6ON5552Xzj///LTjjjvmqymNHj06TZ8+PR122GH5Cs0yRQUAusmcOXPSAQccUI11qyXGln7/+9/Pu1cNGjSo5jSUzorKjlohR70X6Ktj8kl7OvpYnfnaHblPHA+pdcwnxsLG2N56Ovr3iuvf/va3G44IXFE84Y1xgY0m8wBQphgJH6FHvepDGlPBAQDd5F3velc666yz8m5VtRqADhkyJK+6RwQmdN7b3va2vGqruyecRCBy2mmnVb1ZYuJOM66++uo0bdq0vAOgp9lggw2EG10k4ACAbrT77rvn1apqVVZEr41aopdGvMvf0Y+77747P0Jb9aoPli9fnlfN687HWtvstNNOedXWzTffnFfdK6bsTJ06tar+OfHEExsGVNH7BQCoTcABAN2ovZ4Py5Yty6tWu+yyS161dccdd+RV9xgwYEBetfXUU0/lVfO687HWNvV+HmeccUZ68MEH8677bb311un4449P9913X3WMKSb21HLXXXflFQCwMgEHADRw7733Vp3Mn3vuuXylvjvvvDOvVrXFFlvkVat640e/973vVSNmu0u9SpFFixblVfO687HWNnvttVdaf/31867V4sWLq2afv/3tb6sRs1GtElU2ETh85zvfybfquqiOiV4tl19+eb7SVncflQGAnkTAAQANxLGAGPM6fPjwdMIJJ6Trrruumn4SUy3ihe6LL75YjRe95JJL0hFHHJHvtaptt902r1p94AMfSJtuumnetbr11lurF7rPPPNMvtJYe33Do3lmLb/+9a/zqnnd+Vhrm4033jh95Stfybu25s2blw4++OCq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"},81:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return b})),t.d(e,"toc",(function(){return o})),t.d(e,"default",(function(){return i}));var n=t(3),r=t(7),a=(t(0),t(111)),c={id:"topnav",title:"TopNav",sidebar_label:"TopNav"},b={unversionedId:"topnav",id:"topnav",isDocsHomePage:!1,title:"TopNav",description:"TopNavigation provides a heading component for a page/screen.",source:"@site/docs\\topnav.md",slug:"/topnav",permalink:"/docs/topnav",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/topnav.md",version:"current",sidebar_label:"TopNav",sidebar:"someSidebar",previous:{title:"Layout",permalink:"/docs/layout"},next:{title:"Section",permalink:"/docs/section"}},o=[{value:"Usage",id:"usage",children:[{value:"Simple Usage",id:"simple-usage",children:[]},{value:"Left or Right Content",id:"left-or-right-content",children:[]}]},{value:"Properties",id:"properties",children:[]}],g={toc:o};function i(A){var e=A.components,c=Object(r.a)(A,["components"]);return Object(a.b)("wrapper",Object(n.a)({},g,c,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TopNavigation provides a heading component for a page/screen."),Object(a.b)("p",null,Object(a.b)("img",{alt:"topNavMid",src:t(149).default})),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("h3",{id:"simple-usage"},"Simple Usage"),Object(a.b)("p",null,"You can simply put your title or your logo on ",Object(a.b)("inlineCode",{parentName:"p"},"middleContent")),Object(a.b)("p",null,Object(a.b)("img",{alt:"topNavMid",src:t(149).default})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { Layout, TopNav } from 'react-native-rapi-ui';\n\n<Layout>\n    <TopNav middleContent=\"Home\">\n</Layout>\n\n")),Object(a.b)("h3",{id:"left-or-right-content"},"Left or Right Content"),Object(a.b)("p",null,"You can add a content on left or right you can give it an action (",Object(a.b)("inlineCode",{parentName:"p"},"onPress"),") too."),Object(a.b)("p",null,Object(a.b)("img",{alt:"topNavLeft",src:t(164).default}),Object(a.b)("img",{alt:"topNavRight",src:t(165).default})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { Layout, TopNav } from \'react-native-rapi-ui\';\n\n<Layout>\n    <TopNav\n        leftContent={<Ionicons name="chevron-back" size={20} color={theme.black} />}\n        leftAction={() => console.log(\'back icon pressed\')}\n        middleContent="Profile"\n    />\n    <TopNav\n        rightContent={\n            <Ionicons name="ellipsis-vertical" size={20} color={theme.black} />\n        }\n        rightAction={() => console.log(\'setting icon pressed\')}\n        middleContent="Settings"\n    />\n</Layout>;\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"props"),Object(a.b)("th",{parentName:"tr",align:"center"},"required"),Object(a.b)("th",{parentName:"tr",align:"center"},"value"),Object(a.b)("th",{parentName:"tr",align:null},"Default Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"https://reactnative.dev/docs/view#props"},"ViewProps"))),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"height")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"number")),Object(a.b)("td",{parentName:"tr",align:null},"64")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"backgroundColor")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",{parentName:"tr",align:null},"#FFFFFF")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"borderColor")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"string")),Object(a.b)("td",{parentName:"tr",align:null},"#c0c0c0")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"leftContent")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"string")," or ",Object(a.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"middleContent")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"string")," or ",Object(a.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"rightContent")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"string")," or ",Object(a.b)("inlineCode",{parentName:"td"},"React.ReactNode")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"leftAction")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"VoidFunction")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"middleAction")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"VoidFunction")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"rightAction")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("inlineCode",{parentName:"td"},"VoidFunction")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"leftTextStyle")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/text-style-props"},"TextStyle")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"middleTextStyle")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/text-style-props"},"TextStyle")),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("strong",{parentName:"td"},"rightTextStyle")),Object(a.b)("td",{parentName:"tr",align:"center"},"No"),Object(a.b)("td",{parentName:"tr",align:"center"},Object(a.b)("a",{parentName:"td",href:"https://reactnative.dev/docs/text-style-props"},"TextStyle")),Object(a.b)("td",{parentName:"tr",align:null})))))}i.isMDXComponent=!0}}]);