require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')

describe('SAN_SOCIAL_VOLUME_PROJECTS', () => {
    testHandlesNullData(
        'fetchSocialVolumeProjects',
        san.SAN_SOCIAL_VOLUME_PROJECTS
    )

    const projects = san.SAN_SOCIAL_VOLUME_PROJECTS()

    it('returns an array of projects', () => {
        expect(projects).to.be.an('array')
    })

    it('has proper header', () => {
        expect(projects[0]).to.equal('Social Volume Projects')
    })
})
