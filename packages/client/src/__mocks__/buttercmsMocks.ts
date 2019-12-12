const MockButterCMS = () => ({
  content: {
    retrieve: (collectionArray, params?) => {
      let data = {};
      if (collectionArray[0] === 'warnings') {
        data = {
          warnings: [
            {
              active: true,
              description:
                'MakerDAO has launched multi-collateral DAI. As a result, the coin we currently know as DAI will now be named SAI (single collateral DAI) and the new multi collateral DAI will take its name. We will be completing technical maintenance to ensure that we will be supporting the multi-collateral DAI. To find out more, please see our blog post about this topic:',
              id: 'dai-warning',
              image: 'https://cdn.buttercms.com/o6n3MyZVTAyx89N9OAU5',
              link: 'https://raise.it/blog/multi-collatorel-dai-what-does-it-mean-for-raise',
              name: 'Important message about DAI new token'
            }
          ]
        };
      } else if (collectionArray[0] === 'get_started') {
        data = {
          get_started: [
            {
              description:
                'First of all, make sure you have DAI currency to start investing in loan auctions. ↵↵You can check your balance from your dashboard.',
              image: 'https://cdn.buttercms.com/R6J5G9iR3Sc9Gt3L8AUI',
              title: 'Get started'
            },
            {
              description:
                'Raise offers live investment opportunities , an auction closes when the loan gets fully funded, so make sure you place an offer before the auction time is up. Click on any auction to learn more about the borrower.',
              image: 'https://cdn.buttercms.com/wWvP4gR5QJKMjMaHBjBS',
              title: 'Check out the active auctions'
            },
            {
              description:
                'By investing in an active auction you are helping fund a loan. There’s no minimum amount, so feel free to diversify the risk. You will be able to invest as many times as you wish in the same auction, as long as it is still open.',
              image: 'https://cdn.buttercms.com/4dL3e0ubTHuJ13iT9FkR',
              title: 'Place an offer'
            },
            {
              description:
                'If the auction ends successfully, your investment will be active and the loan APR set. If the loan does not get fully funded, you will be able to claim the refund of your bid. Check your active investments details in “My activity”.',
              image: 'https://cdn.buttercms.com/9YZNSZ1nQRC4pmNpnLjF',
              title: 'Wait for payback'
            }
          ]
        };
      }

      return {
        data: {
          data
        }
      };
    }
  },
  page: {
    retrieve: (pageType, slug) => {
      const data = {
        companies: [
          {
            address: 'Avenida de la Catedral 6-8. 08002 Barcelona',
            background: 'https://cdn.buttercms.com/SnV5NXlFQDmHObRHyU2n',
            business_plan: '',
            company_name: 'HERO Fintech Solutions Ptd. Ltd.',
            competitive_analysis: '',
            description:
              "<p>HERO Fintech Technologies develops innovative business models to create opportunities and empower financial inclusion in emerging markets. With the rise of technology, our company sees the opportunity to develop business models that would provide global stability within the financial world. Developing countries have found themselves stuck in an environment where they have embraced and are using the latest technology but are still lacking within the financial world.</p>↵<p>Through our previous work, we have learned that specific regions have a population that is fully committed to the internet and are fully utilizing social networks, payment protocols, and online interfaces. The same population is still unbanked or underbanked and it is incredibly difficult for them to attain traditional credit facilities. As a result, we are raising money to develop specific business models that will allow us to distribute credit to these people and create a stronger future.</p>↵<p>By filling our loans, you will see your return of investment but also feel satisfied that you have made a real difference to someone's life.&nbsp;</p>",
            ethereum_address: '0xf3c3a56807978293148a66be349c856a408574c9',
            foundation_date: '2019-09-30T00:00:00',
            logo: 'https://cdn.buttercms.com/YzIsSDsTvCCpZ7pbbaVW',
            operations: '',
            short_description:
              'HERO Fintech Technologies develops innovative business models to create opportunities and empower financial inclusion in emerging markets.',
            slug: 'hero-fintech',
            updated: '',
            url: 'https://herotoken.io/',
            url_text: '',
            user_id: 'user:c13a39df-3e0c-4d2b-afd7-4222812b4772'
          }
        ]
      };
      return {
        data: {
          data
        }
      };
    }
  }
});

export default MockButterCMS;
