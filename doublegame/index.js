window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 800;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;


    
    class Asteroid{
        constructor(){
            this.x = Math.random() * this.game.width;
            this.y = Math.random() * this.game.height;

        }
        draw(context){
            context.beginPath();
            context.arc(this.x, this.y, 40, 0, Math.PI * 2);
            context.stroke();

        }

    }

    class Game{
        constuctor(width, height){
        this.width = width;
        this.height = height;
        this.asteroidPool = [];
        this.max = 10;
        this.createAsteroidPool();
        
        }
        createAsteroidPool(){
            for(let i = 0; i < this.max; i++){
                this.asteroidPool.push(new Asteroid(this))
            }
        }

        render(context){
            this.asteroidPool.forEach(asteroid => {
                this.asteroid.draw(context);

            });
            
            
        }

    }
    const game = new Game(canvas.width, canvas.height);
    game.render(ctx);

    function animate(){


    }

})

