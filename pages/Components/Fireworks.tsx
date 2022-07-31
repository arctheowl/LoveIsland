import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import React from 'react'

type IParticle = {
};

export default class ParticlesContainer extends React.PureComponent<IParticle> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  }

  render() {
    const options = {
      preset: "fireworks",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}
