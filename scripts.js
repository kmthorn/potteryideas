var ideas = [
  {
    "idea": "Animal Creations",
    "description": "Let children explore their creativity by making clay animals. They can create their favorite animals or even invent new ones.",
    "resources": "Clay, clay sculpting tools"
  },
  {
    "idea": "Handprint Keepsakes",
    "description": "Help children create lasting memories by making handprint keepsakes using clay.",
    "resources": "Clay, paint, brushes"
  },
  {
    "idea": "Storytelling Pottery",
    "description": "Encourage children to create pottery pieces inspired by their favorite stories or characters.",
    "resources": "Clay, clay sculpting tools"
  },
  {
    "idea": "Decorative Tiles",
    "description": "Teach children how to make decorative tiles using clay. They can use stamps, textures, or hand-painted designs.",
    "resources": "Clay, stamps, texture tools"
  },
  {
    "idea": "Personalized Mugs",
    "description": "Guide children in making their own personalized mugs. They can shape the mug and add their names or designs.",
    "resources": "Clay, clay sculpting tools, glazes"
  },
  {
    "idea": "Miniature Fairy Gardens",
    "description": "Let children build their own miniature fairy gardens using clay. They can create tiny pots, flowers, mushrooms, and more.",
    "resources": "Clay, clay sculpting tools, paints"
  },
  {
    "idea": "Thumbprint Jewelry",
    "description": "Show children how to make thumbprint jewelry using clay. They can press their thumbs or fingers to create unique pendants.",
    "resources": "Clay, clay sculpting tools, strings"
  },
  {
    "idea": "Clay Masks",
    "description": "Help children make clay masks by molding and shaping the clay on their faces or using face molds.",
    "resources": "Clay, clay sculpting tools, paints"
  },
  {
    "idea": "Nature-Inspired Sculptures",
    "description": "Encourage children to explore nature by creating sculptures inspired by flowers, leaves, insects, or animals.",
    "resources": "Clay, clay sculpting tools"
  },
  {
    "idea": "Collaborative Mural",
    "description": "Engage children in a collaborative project where they create individual clay tiles that form a mural or wall installation.",
    "resources": "Clay, clay sculpting tools"
  }
];

function generateIdea() {
  var randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  var ideaElement = document.getElementById("idea");
  ideaElement.textContent = randomIdea.idea;
  ideaElement.setAttribute("aria-live", "polite");

  var descriptionElement = document.getElementById("description");
  descriptionElement.textContent = randomIdea.description;
  descriptionElement.setAttribute("aria-live", "polite");

  var resourcesElement = document.getElementById("resources");
  resourcesElement.textContent = randomIdea.resources;
  resourcesElement.setAttribute("aria-live", "polite");
}

document.getElementById("generate-btn").addEventListener("click", generateIdea);

// Clear idea content on page load
window.addEventListener("load", function() {
  var ideaElement = document.getElementById("idea");
  ideaElement.textContent = "";

  var descriptionElement = document.getElementById("description");
  descriptionElement.textContent = "";

  var resourcesElement = document.getElementById("resources");
  resourcesElement.textContent = "";
});
