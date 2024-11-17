// Initialisation d'EmailJS avec votre clé publique
(function() {
    emailjs.init("XorXS8LgqPQhJsNeR");  // Remplacez par votre propre clé publique EmailJS
})();

// Fonction pour afficher les détails spécifiques en fonction du service sélectionné
function showServiceDetails() {
    // Cachez tous les détails de service
    document.querySelectorAll('.service-details').forEach(function(element) {
        element.classList.add('hidden');
    });

    // Récupérer le service sélectionné
    var service = document.getElementById('service').value;
    
    // Afficher les détails pour le service sélectionné
    if (service === "electricity") {
        document.getElementById('electricity-details').classList.remove('hidden');
    } else if (service === "solar") {
        document.getElementById('solar-details').classList.remove('hidden');
    } else if (service === "hvac") {
        document.getElementById('hvac-details').classList.remove('hidden');
    }
}

// Traitement du formulaire
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    var formData = new FormData(this);

    // Construire l'objet de données à envoyer
    var formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });

    // Créez un objet à envoyer à EmailJS avec les informations du formulaire
    var templateParams = {
        from_name: formObject.name,
        from_email: formObject.email,
        from_phone: formObject.phone,
        service_type: formObject.service,
        message: formObject.message || "Aucune description fournie.",  // Message de demande
        reply_to: formObject.email  // Répondre à l'email de l'expéditeur
    };

    // Envoi du formulaire à EmailJS
    emailjs.send("service_k5pfv8d", "template_bqyf3d6", templateParams)  // Utilisation de vos identifiants de service et template
        .then(function(response) {
            console.log('Email envoyé avec succès:', response);
            alert('Votre demande de devis a été envoyée avec succès. Nous vous contacterons bientôt!');
        }, function(error) {
            console.log('Erreur lors de l\'envoi de l\'email:', error);
            alert('Une erreur est survenue lors de l\'envoi de votre demande.');
        });
});
