describe('Band and Musician Models', () => {
    beforeAll(async () => {
      await sequelize.sync({ force: true });
    });
  
    test('can create a Band', async () => {
      const band = await Band.create({
        name: 'AC/DC',
        genre: 'rock',
        yearFormed: 1973
      });
      expect(band.name).toBe('AC/DC');
      expect(band.genre).toBe('rock');
      expect(band.yearFormed).toBe(1973);
    });
    test('can add songs to a band', async () => {
        // Create a band
        const band = await Band.create({
          name: 'Guns N\' Roses',
          genre: 'rock',
          yearFormed: 1985
        });
      
        // Create some songs
        const song1 = await Song.create({
          title: 'Welcome to the Jungle',
          year: 1987
        });
      
        const song2 = await Song.create({
          title: 'Sweet Child O\' Mine',
          year: 1987
        });
      
        // Associate the songs with the band
        await band.addSongs([song1, song2]);
      
        // Retrieve the band with its songs
        const bandsWithSongs = await Band.findAll({ include: Song });
      
        expect(bandsWithSongs.length).toBe(1);
        expect(bandsWithSongs[0].Songs.length).toBe(2);
      });      
  
    test('can add multiple Musicians to a Band', async () => {
      // create a band
      const band = await Band.create({
        name: 'Metallica',
        genre: 'heavy metal',
        yearFormed: 1981
      });
  
      // create multiple musicians and add them to the band
      const musician1 = await Musician.create({
        name: 'James Hetfield',
        instrument: 'vocals, guitar',
        age: 58
      });
      const musician2 = await Musician.create({
        name: 'Kirk Hammett',
        instrument: 'guitar',
        age: 59
      });
      const musician3 = await Musician.create({
        name: 'Robert Trujillo',
        instrument: 'bass',
        age: 57
      });
      await band.addMusicians([musician1, musician2, musician3]);
  
      // check that the musicians were added to the band
      const bandWithMusicians = await Band.findByPk(band.id, { include: Musician });
      expect(bandWithMusicians.musicians).toHaveLength(3);
      expect(bandWithMusicians.musicians.map(m => m.name)).toEqual(expect.arrayContaining(['James Hetfield', 'Kirk Hammett', 'Robert Trujillo']));
    });
  });
  