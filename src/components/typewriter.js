// creditos https://svelte.dev/tutorial/custom-js-transitions
export default function typewriter(node, { speed = 70 }) {
  const valid =
    node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

  // testa se o node está vazio
  if (valid) {
    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
}

