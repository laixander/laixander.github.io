// ANGULAR
(function() {
    var app = angular.module('ourTeam', ['ngSanitize']);

    app.controller('ourTeamCtrl', function(){
        this.profiles = staff;
    });

    var staff = [

        // ADMIN

        {
            name: 'Eldon Tenorio',
            description: 'General Manager',
            image: 'images/profile.png',
            motto: '<em>&quot;For we walk by faith, not by sight.&quot;</em><br>- 2 Corinthians 5:7'
        },
        {
            name: 'Lorena Nueve',
            description: 'Admin/Interpreter',
            image: 'images/profile.png',
            motto: '<em>&quot;There will always be an excuse to hinder you from your goal. Be stronger than your excuses.&quot;</em><br>- Bethany Hill'
        },
        {
            name: 'Matoshi Del Mundo',
            description: 'Junior Manager',
            image: 'images/profile.png',
            motto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        },

        // UI/UX DESIGNER

        {
            name: 'Jasmin Alarilla',
            description: 'UI/UX Designer',
            image: 'images/profile.png',
            motto: '<em>&quot;Earth is not our real home. Our real home is yet to come.&quot;</em>'
        },
        {
            name: 'Laixander Naguit',
            description: 'UI/UX Designer',
            image: 'images/profile.png',
            motto: '<em>&quot;I think it is possible for ordinary people to choose to be extraordinary.&quot;</em><br>- Elon Musk'
        },
        {
            name: 'Russel Ramos',
            description: 'UI/UX Designer',
            image: 'images/profile.png',
            motto: '<em>&quot;Don\'t be afraid to fail, be afraid not to try.&quot;</em>'
        },
        {
            name: 'Arlohn Tijam',
            description: 'UI/UX Designer',
            image: 'images/profile.png',
            motto: '<em>&quot;The pain you feel today is the strength you feel tomorrow.&quot;</em>'
        },

        // Frontend Developer

        {
            name: 'Anthony Mendiola',
            description: 'Frontend Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Forced kindness deserves no thanks.&quot;</em>'
        },
        {
            name: 'Jennifer Postanes',
            description: 'Frontend Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Keep moving forward, and keep getting better.&quot;</em>'
        },
        {
            name: 'Irish Turingan',
            description: 'Frontend Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</em><br>- Mahatma Gandhi'
        },

        // Web Developer

        {
            name: 'Florin Bamba',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;I may not be there yet but I\'m closer than I was yesterday.&quot;</em>'
        },
        {
            name: 'John Gleztin Cepeda',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;it\'s not about being the best, it\'s about being better than you were yesterday.&quot;</em>'
        },
        {
            name: 'Christian Dimafelix',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Love is like a wind you can\'t see it but you can feel it.&quot;</em><br>- Jaime Sullivan'
        },
        {
            name: 'Mikko John Falcon',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Don\'t stick on what you can do. Try something new, it might be the best you.&quot;</em>'
        },
        {
            name: 'Jasper Gonzales',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;aal izz well.&quot;</em><br>- Ranchoddas Shamaldas Chanchad'
        },
        {
            name: 'Alvin Manuel Honrales',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;He who hesitates is lost.&quot;</em><br>- Proverb'
        },
        {
            name: 'Marv Eadtler Ishida',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;The road to success is always under construction.&quot;</em><br>- Lily Tomlin'
        },
        {
            name: 'Queenilyn Martinez',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Sic Parvis Magna - Greatness comes from<br>small things.&quot;</em><br>- Francis Drake'
        },
        {
            name: 'Kim Arvie Mesa',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;while (nonsuccess) {<br>tryAgain();<br> if (Dead)<br> break; }&quot;</em>'
        },
        {
            name: 'Gerson Pascua',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;It\'s better to be late than absent&quot;</em>'
        },
        {
            name: 'Robby Reyes',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;I know the world\'s a broken bone, but melt your headaches, call it home.&quot;</em><br>- Brendon Urie'
        },
        {
            name: 'Gerald San Jose',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Treasure the experience. Dreams fade away after you wake up.&quot;</em><br>- Hitoha Miyamizu'
        },
        {
            name: 'Jovy Villafuerte',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;It is better to be infamous than forgotten.&quot;</em>'
        },
        {
            name: 'John Andrew Villaseñor',
            description: 'Web Developer',
            image: 'images/profile.png',
            motto: '<em>&quot;Everything is a learning experience&quot;</em><br>- Angus Jones'
        },
    ];
})();