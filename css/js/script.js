function openModal(name, score, avatar, element) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalScore').innerText = score;
    document.getElementById('modalAvatar').src = avatar;
    
    // Tohle vezme ikonky z karty a dá je do velkého okna
    const tierIcons = element.querySelector('.tiers-row').innerHTML;
    document.getElementById('modalTiersDisplay').innerHTML = tierIcons;
    
    document.getElementById('playerModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('playerModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('playerModal')) {
        closeModal();
    }
}
