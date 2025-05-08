function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (envelope.classList.contains('open')) return;
    
    envelope.classList.add('open');
    
    // Create flowers
    const flowersContainer = document.querySelector('.flowers-container');
    flowersContainer.innerHTML = '';
    
    const flowerColors = ['#f1c40f', '#e67e22', '#e74c3c', '#9b59b6'];
    
    for (let i = 0; i < 4; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.backgroundColor = flowerColors[i];
        
        const center = document.createElement('div');
        center.classList.add('flower-center');
        flower.appendChild(center);
        
        flowersContainer.appendChild(flower);
    }
}
